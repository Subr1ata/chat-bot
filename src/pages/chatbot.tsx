import { useEffect, useState } from "react";
import { TbMessage } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeSmile2Fill, RiHomeSmile2Line } from "react-icons/ri";
import {
  BiMessageSquareDetail,
  BiSolidMessageSquareDetail,
  BiSolidMessageAltDetail,
} from "react-icons/bi";
import { Button } from "../components/ui/button";
import { PiSealQuestionFill } from "react-icons/pi";
import { CgSpinnerAlt } from "react-icons/cg";

import { MdKeyboardArrowLeft } from "react-icons/md";
import axios from "axios";
import { APIEndPoints } from "../APIEndPoints";
import ChatInput from "../components/ChatInput";
import ChatMessages from "../components/ChatMessages";

function ChatBot() {
  const [isOpenChatBot, setIsOpenChatBot] = useState(false);
  const [currentTab, setCurrentTab] = useState<"home" | "messages">("home");
  const [isLoading, setIsLoading] = useState(false);
  const [isAskQuestion, setIsAskQuestion] = useState(false);
  const [chats, setChats] = useState<string[]>([]);
  // const [currentText, setCurrentText] = useState("");

  console.log("textMessages::", chats);

  const fetchChats = async () => {
    const { data } = await axios.get(`${APIEndPoints.backendUrl}/api/chat`);

    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const handleClick = () => {
    setIsOpenChatBot((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [isLoading]);

  return (
    <div className="relative flex h-screen w-screen bg-cyan-500">
      {/* <!-- Main modal --> */}
      <div className="absolute bottom-[60px] right-0">
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className={`${
            isOpenChatBot
              ? "transition duration-1000 scale-100 opacity-100"
              : "hidden"
          } overflow-y-auto overflow-x-hidden z-50 justify-center items-center md:inset-0 max-h-full transform`}
        >
          <div className="relative mb-5">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-2xl shadow dark:bg-gray-700 bg-[#FBFBFF] mx-5">
              {/* <!-- Modal header --> */}
              {currentTab === "home" && !isAskQuestion ? (
                <div>
                  <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      <img
                        src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                        alt="icon"
                        className="w-8 h-8 rounded-full"
                      />
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <img
                        src="https://static.intercomassets.com/avatars/5133131/square_128/benjamin_profile_picture-1667926369.jpeg"
                        alt="logo"
                        className="rounded-full"
                      />
                    </button>
                  </div>
                  <div className="p-5 space-y-4 mb-32 mt-10 md:mb-32 md:mt-10 w-80">
                    <div className="mx-3">
                      <span className="text-3xl font-bold text-gray-500">
                        Hi there 👋
                      </span>
                      <br />
                      <span className="text-3xl font-bold">
                        How can we help?
                      </span>
                    </div>
                    <div
                      className="flex flex-row shadow-lg border-gray-200 rounded-lg p-4 border-2 cursor-pointer justify-between items-center relative mb-5"
                      onClick={() => setIsAskQuestion(true)}
                    >
                      <div className="flex flex-col">
                        <span className="font-bold text-sm hover:text-green-800">
                          Ask a question
                        </span>
                        <span className="text-sm text-gray-700">
                          AI agent and team can help
                        </span>
                      </div>
                      <div className="flex flex-row items-center">
                        <img
                          src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                          alt="logo"
                          className="absolute w-8 h-8 z-10 right-7"
                        />
                        <img
                          src="https://static.intercomassets.com/avatars/5133131/square_128/benjamin_profile_picture-1667926369.jpeg"
                          alt="logo-1"
                          className="absolute w-7 h-7 rounded-full z-5 right-2"
                        />
                      </div>
                      {/* </div> */}
                    </div>
                  </div>{" "}
                </div>
              ) : currentTab === "messages" && !isAskQuestion ? (
                <div className="w-80">
                  <div className="flex items-center justify-center p-4 md:p-5 rounded-t-xl dark:border-gray-600 bg-green-800 ">
                    <span className="text-white font-bold text-xl">
                      Messages
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 space-y-4 mb-32 mt-16">
                    {isLoading ? (
                      <CgSpinnerAlt className="animate-spin w-8 h-8 mt-36" />
                    ) : (
                      <>
                        <span className="text-3xl font-bold">
                          <BiSolidMessageAltDetail />
                        </span>
                        <span className="text-3xl font-bold">No messages </span>
                        <div className="flex flex-col">
                          <span className="text-sm w-full">
                            Messages from the team will be shown here
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  {!isLoading && (
                    <div className="text-center mb-5">
                      <Button
                        className="px-5 bg-green-800 rounded-lg gap-2"
                        onClick={() => setIsAskQuestion(true)}
                      >
                        <span className="font-bold">Ask a question </span>
                        <PiSealQuestionFill className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <div className="flex items-center rounded-t-xl dark:border-gray-600">
                    <div
                      className="justify-start hover:bg-green-200 rounded-xl m-4 p-2 cursor-pointer"
                      onClick={() => setIsAskQuestion(false)}
                    >
                      <MdKeyboardArrowLeft className="w-8 h-8 text-green-800" />
                    </div>
                    <div className="p-4 md:p-5">
                      <span className="font-bold text-center text-xl ml-11">
                        Fin
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-1 w-80">
                    {isLoading ? (
                      <CgSpinnerAlt className="animate-spin my-[5rem] w-8 h-8" />
                    ) : (
                      <>
                        <div className="flex flex-col h-96 w-full">
                          <ChatMessages className="px-2 py-3 flex-1" />
                          <ChatInput className="px-7" />
                        </div>
                        {/* <span className="text-3xl font-bold">
                          <img
                            src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                            alt="logo"
                            className="w-20 h-20"
                          />
                        </span>
                        <span className="text-sm font-bold">
                          AI Agent answers instantly
                        </span>
                        <div className="flex flex-row gap-2">
                          <img
                            src="https://static.intercomassets.com/avatars/5133131/square_128/benjamin_profile_picture-1667926369.jpeg"
                            alt="logo"
                            className="w-5 h-5 rounded-full"
                          />
                          <span className="text-sm text-slate-400 w-full">
                            Ask for the team if needed
                          </span>
                        </div> */}
                      </>
                    )}
                  </div>
                  {!isLoading && !isAskQuestion && (
                    <div className="text-center mb-5">
                      <Button
                        className="px-5 bg-green-800 rounded-lg gap-2"
                        onClick={() => setIsAskQuestion(true)}
                      >
                        <span className="font-bold">Ask a question </span>
                        <PiSealQuestionFill className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </>
              )}

              {!isAskQuestion ? (
                <div
                  className={`p-3 rounded-b dark:border-gray-600 ${
                    isAskQuestion
                      ? ""
                      : "border-gray-200 border-t flex items-center justify-center gap-32 bg-white rounded-b-xl shadow"
                  }`}
                >
                  {!isAskQuestion && (
                    <>
                      <div
                        data-modal-hide="default-modal"
                        className="flex flex-col items-center justify-center content-center cursor-pointer"
                        onClick={() => setCurrentTab("home")}
                      >
                        {currentTab === "home" ? (
                          <RiHomeSmile2Fill className="text-green-800 rounded-lg w-7 h-7" />
                        ) : (
                          <RiHomeSmile2Line className="text-green-800 rounded-lg w-7 h-7" />
                        )}
                        <span
                          className={`${
                            currentTab === "home"
                              ? "text-green-800 text-sm font-bold"
                              : "text-green-800 text-sm"
                          }`}
                        >
                          Home
                        </span>
                      </div>
                      <div
                        data-modal-hide="default-modal"
                        className="flex flex-col items-center justify-center content-center cursor-pointer"
                        onClick={() => {
                          setCurrentTab("messages");
                          setIsLoading(true);
                        }}
                      >
                        {currentTab === "messages" ? (
                          <BiSolidMessageSquareDetail className="text-green-800 rounded-lg w-7 h-7" />
                        ) : (
                          <BiMessageSquareDetail className="text-green-800 rounded-lg w-7 h-7" />
                        )}
                        <span
                          className={`${
                            currentTab === "messages"
                              ? "text-green-800 text-sm font-bold"
                              : "text-green-800 text-sm"
                          }`}
                        >
                          Messages
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="p-2 rounded-b-xl"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <div
          className="bg-green-800 rounded-full text-center px-3 py-2 cursor-pointer transform transition duration-2000 hover:scale-110"
          onClick={handleClick}
        >
          {isOpenChatBot ? (
            <IoIosArrowDown
              size="30"
              className="h-9 text-white w-7 transition-transform duration-200 transform hover:scale-110"
            />
          ) : (
            <TbMessage
              size="30"
              className="h-9 text-white w-7 transition-transform duration-200 transform hover:scale-110"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
