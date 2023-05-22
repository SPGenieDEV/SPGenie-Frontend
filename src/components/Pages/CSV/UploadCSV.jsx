import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../Layout/PageTitle";
import { useForm } from "react-hook-form";
import { Progress, Box } from "@chakra-ui/react";
import axios from "axios";
import Papa from "papaparse";
import { Select } from "@chakra-ui/react";

const UploadCSV = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [model, setModel] = useState(1);

  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (results) => {
        console.log(results.data);
        const newData = results.data.map((item) => {
          return { ...item, storypoint: null };
        });
        setData(newData);
      },
      header: true,
    });
  };

  const handlePredict = async (rowIndex, description) => {
    setIsLoading(true);
    console.log(rowIndex);
    const url = "http://127.0.0.1:5000/userStory?choice=" + model;
    const us = { user_story: description };
    try {
      const response = await axios.post(url, us);

      const prediction = response.data["story_point"];
      console.log(prediction);
      // Update the data array with the prediction
      const updatedData = data.map((row, index) =>
        index === rowIndex ? { ...row, storypoint: prediction } : row
      );
      setData(updatedData);

      // Update the state with the returned prediction data if necessary
    } catch (error) {
      console.error(error);
      // Handle error cases
    }
    setIsLoading(false);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };

  function convertToCSV(data) {
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(",")];

    data.forEach((row) => {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    });

    return csvRows.join("\n");
  }

  function downloadCSV(data) {
    const csvData = convertToCSV(data);
    const csvBlob = new Blob([csvData], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement("a");

    link.href = csvUrl;
    link.download = "data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="font-poppins">
      <PageTitle title="Bulk Prediction" />
      <button
        className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded"
        onClick={() => history.push("/dashboard")}
      >
        Back
      </button>
      <input
        className="mt-3 ml-6 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-700 rounded"
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      <h1 className="p-3 text-sm font-medium text-red-700 flex">
        <span className=" mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </span>
        Please ensure that your CSV file includes the following columns: 'ISSUE KEY', 'TITLE', and 'DESCRIPTION'.
      </h1>
      <div className=" container p-6">
        <Select
          placeholder="Select Prediction Model"
          onChange={handleModelChange}
        >
          <option value="1">Deep-SE </option>
          <option value="2">RNN CNN</option>
          <option value="3">GPT2</option>
          <option value="4">GPT2-Medium</option>
        </Select>
      </div>
      {isLoading && <Progress className=" my-2" size="lg" isIndeterminate />}
      <h1 className="p-3 text-xl font-bold text-black">Data Table CSV</h1>

      <div
        className=" w-full px-2 overflow-auto"
        style={{ maxHeight: "400px" }}
      >
        {data.length > 0 && (
          <table class="p-2 text-sm text-left text-gray-500 dark:text-gray-400 overflow-auto">
            <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
              <tr className=" w-10">
                <th class="p-3 break-words whitespace-normal">Issue Key</th>
                <th class="p-3 break-words whitespace-normal">Title </th>
                <th class="p-3 break-words whitespace-normal w-10">
                  Description{" "}
                </th>
                <th class="p-3 break-words whitespace-normal">Story Point</th>
                <th class="p-3 break-words whitespace-normal">Prediction</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className=" w-10">
                  {Object.values(row).map((value, i) => (
                    <td
                      class="p-3 break-words whitespace-normal max-w-lg "
                      key={i}
                    >
                      {value}
                    </td>
                  ))}

                  <td class="p-3 break-words whitespace-normal">
                    <button
                      class=" mt-3 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-600 hover:border-teal-500 rounded"
                      onClick={() => handlePredict(index, row.description)}
                    >
                      Predict
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {data.length > 0 ? (
        <button
          className="mt-3 bg-fuchsia-500 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 border-b-4 border-fuchsia-700 hover:border-fuchsia-700 rounded"
          onClick={() => downloadCSV(data)}
        >
          Download CSV
        </button>
      ) : null}
    </div>
  );
};

export default UploadCSV;
