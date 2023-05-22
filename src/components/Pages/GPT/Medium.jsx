import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PageTitle from "../../Layout/PageTitle";
import { useForm } from "react-hook-form";
import { Progress, Box } from "@chakra-ui/react";
import axios from "axios";

const Medium = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isExplain, setIsExplain] = useState(false);
  const [storypoint, setStorypoint] = useState("aa");
  const [userStory, setUserStory] = useState("");
  const [XAI, setXAI] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setUserStory(data.userStory);
    console.log(data);

    const dataSubmit = new FormData();
    dataSubmit.append("choice", data.choice);
    dataSubmit.append("userStory", data.userStory);

    try {
      // Replace with your API endpoint and data format
      const response = await axios.post(
        "http://127.0.0.1:5000/explain_prediction",
        dataSubmit
      );
      if (response.status === 200) {
        setIsExplain(true);
        setStorypoint(response.data["story_point"]);
      }
      console.log(response.status);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const explainResult = async () => {
    setIsLoading(true);
    const data = {
      userStory: userStory,
    };

    try {
      // Replace with your API endpoint and data format
      const response = await axios.post(
        "http://127.0.0.1:5000/explainCustom",
        data
      );
      if (response.status === 200) {
        setXAI(response.data);
      }
      console.log(response.status);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="font-poppins">
      <PageTitle title="GPT2 Medium" />
      <button
        className="mt-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-700 rounded"
        onClick={() => history.push("/dashboard")}
      >
        Back
      </button>
      <div className=" container p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            defaultValue="4"
            {...register("choice")}
            hidden
          />

          <label
            for="message"
            class="block mb-2 text-lg font-medium text-gray-900"
          >
            Enter User Story
          </label>
          <textarea
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border-[2px] border-gray-800 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="As a < who>, I want <what (action)>, so that <why (business value)>"
            {...register("userStory", {})}
          />
          {errors.userStory && <span>This field is required</span>}
          {isLoading && (
            <Progress className=" my-2" size="lg" isIndeterminate />
          )}
          {isExplain === false ? (
            <input
              class=" mt-3 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              value="Predict"
            />
          ) : null}
        </form>

        <div className=" my-4 ">
          {storypoint !== "aa" ? (
            <h1 className=" text-xl text-black font-semibold">
              Story Point Value :{" "}
              <span className=" text-blue-600">{storypoint}</span>
            </h1>
          ) : null}
        </div>

        {isExplain === true ? (
          <button
            class=" mt-3 bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-600 hover:border-teal-500 rounded"
            onClick={() => explainResult()}
          >
            Explain Value
          </button>
        ) : null}

        <div className=" my-3 ">
          {XAI !== "" ? (
            <div>
              <h1 className=" text-xl mb-4 text-black font-semibold">
                Explain Result XAI :{" "}
                <span className=" text-red-600">Custom XAI Function</span>
              </h1>{" "}
              <iframe
                srcDoc={XAI}
                width="100%"
                height="800px"
                title="External Page"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Medium;
