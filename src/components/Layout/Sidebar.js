import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
    IconButton,
    Image,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [navSize, changeNavSize] = useState("large");

    const menuItems = [

        {
            title: "Dashboard",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

            ),
            subMenus: [
                {
                    name: "User Story",
                    link: "/dashboard",
                  },
            ],
        },
        {
            title: "Top Models",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                </svg>
            ),
            subMenus: [
                {
                    name: "Traditional Method",
                    link: "/dashboard/model/traditional",
                },
                {
                    name: "Deep-SE",
                    link: "/dashboard/model/deepse",
                },
                {
                    name: "RNN-CNN",
                    link: "/dashboard/model/rnncnn",
                },
            ],
        },
        {
            title: "GPT Models",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                </svg>
            ),
            subMenus: [
                {
                    name: "GPT2",
                    link: "/dashboard/gpt/GPT2small",
                },
                {
                    name: "GPT2 - Medium",
                    link: "/dashboard/gpt/GPT2medium",
                },
                {
                    name: "GPT2 - Large",
                    link: "/dashboard/gpt/GPT2large",
                },
            ],
        },
        {
            title: "Bulk Prediction",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            ),
            subMenus: [
                {
                    name: "CSV Mode",
                    link: "/dashboard/bulkprediction",
                },
            ],
        },
    ];
    return (
        <div className={`${navSize == "small" ? "w-20" : "w-72"} h-full relative`}>
            <div
                className={`top-0 bottom-0 left-0 bg-gray-800 col-span-2 fixed h-screen shadow-md flex-col ${navSize == "small" ? "w-20" : "w-72"
                    }`}
            >
                <div className="flex items-start justify-between p-3 bg-white">
                    <div className="flex items-center">
                        <Link className=" flex" to="/dashboard">
                            {/* <Image
                                display={navSize == "small" ? "none" : "flex"}
                                w="20px"
                                objectFit="cover"
                                src="/images/logo.png"
                                alt="Segun Adebayo"
                            /> */}
                            {navSize == "small" ? "none" : <Text className="text-gray-900 text-4xl font-bold tracking-[1px]">SPGenie</Text>}

                        </Link>
                        {/* <span className="text-2xl font-bold text-gray-700">+</span> */}
                    </div>

                    <div className="flex">
                        <IconButton
                            aria-label="Search database"
                            _focus={{ outline: "none" }}
                            background="none"
                            placement="right"
                            color="#000"
                            _hover={{ background: "none" }}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-700 fill-current"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                            onClick={() => {
                                if (navSize == "small") changeNavSize("large");
                                else changeNavSize("small");
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start p-4 bg-gray-900">
                    {/* <div
              className={`p-1 mx-auto ${navSize == "small" ? "hidden" : "flex"}`}
            >
              <Heading className="text-center text-white" as="h4" size="md">
                P.D. Niriella
              </Heading>
            </div> */}

                    {/* <div
                        className={`p-2 mx-auto ${navSize == "small" ? "hidden" : "flex"}`}
                    >
                        <Text className="text-white text-4xl tracking-[1px]">SPGenie</Text>
                    </div> */}

                    {/* <div className="flex mx-auto">
                        <Avatar
                            className="-mb-16"
                            size={navSize == "small" ? "md" : "xl"}
                            name="SPGenie"
                            src="/images/logo.png"
                        />
                    </div> */}
                </div>

                <div className="flex flex-col items-center w-full p-4 pt-4 mt-2 text-white">
                    <Accordion allowToggle w="100%">
                        {menuItems.map((item, index) => (
                            <AccordionItem border="0" py="2" key={index}>
                                <h2>
                                    <AccordionButton>
                                        {item.icon}
                                        <div className="flex-1 pl-2 text-base text-left">
                                            {item.title}
                                        </div>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {item.subMenus.map((subItem, subIndex) => (
                                        <Link to={subItem.link} key={`${index}-${subIndex}`}>
                                            <div className="w-full px-3 py-2 text-sm">
                                                - {subItem.name}
                                            </div>
                                        </Link>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
