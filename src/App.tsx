import { useState } from "react";
import { TbMessage } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeSmile2Fill, RiHomeSmile2Line } from "react-icons/ri";
import {
  BiMessageSquareDetail,
  BiSolidMessageSquareDetail,
} from "react-icons/bi";

function App() {
  const [isOpenChatBot, setIsOpenChatBot] = useState(false);
  const [currentTab, setCurrentTab] = useState("home");

  const handleClick = () => {
    setIsOpenChatBot((prev) => !prev);
  };

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
          <div className="relative p-6 w-full max-w-md max-h-full mx-10">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-2xl shadow dark:bg-gray-700 bg-[#FBFBFF] mx-5">
              {/* <!-- Modal header --> */}
              {currentTab === "home" ? (
                <>
                  <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="icon"
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
                  <div className="p-5 space-y-4 mb-32 mt-10 md:mb-32 md:mt-10">
                    <span className="text-3xl font-bold text-gray-500">
                      Hi there 👋
                    </span>
                    <br />
                    <span className="text-3xl font-bold">How can we help?</span>
                    <div className="flex flex-col shadow-lg border-gray-200 rounded-lg p-4 border-2">
                      <span className="font-bold text-sm">Ask a question</span>
                      {/* <br /> */}
                      <span className="text-sm text-gray-700">
                        AI agent and team can help
                      </span>
                    </div>
                  </div>{" "}
                </>
              ) : (
                <>
                  <div className="flex items-center justify-center p-4 md:p-5 rounded-t-xl dark:border-gray-600 bg-green-800">
                    <span className="text-white font-bold text-xl">
                      Messages
                    </span>
                  </div>
                  <div className="p-5 space-y-4 mb-32 mt-10 md:mb-32 md:mt-10">
                    <span className="text-3xl font-bold text-gray-500">
                      Hi there 👋
                    </span>
                    <br />
                    <span className="text-3xl font-bold">How can we help?</span>
                    <div className="flex flex-col shadow-lg border-gray-200 rounded-lg p-4 border-2">
                      <span className="font-bold text-sm">Ask a question</span>
                      {/* <br /> */}
                      <span className="text-sm text-gray-700">
                        AI agent and team can help
                      </span>
                    </div>
                  </div>{" "}
                </>
              )}

              <div className="border-t flex p-4 md:p-5  border-gray-200 rounded-b dark:border-gray-600 items-center justify-center gap-32">
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
                  onClick={() => setCurrentTab("messages")}
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
              </div>
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

export default App;
