import React from "react";
import { BsMenuUp } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineAttachFile } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

interface IChat {
    sender: "bot" | "user";
    text: string;
}

interface IProps {
    onMenuClick: () => void;
    onNewChatClick: () => void;
    onHelpClick: () => void;
    onSettingsClick: () => void;
    isEmptyChat?: boolean;
    text: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    setText: React.Dispatch<React.SetStateAction<string>>;
    chat: IChat[];
}

const ChatBox = (props: IProps) => {
    const scrollRef = React.useRef(null);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [props.chat]);
    return (
        <div className="flex flex-col w-[100vw] max-h-[100vh] bg-[#383838]  overflow-hidden">
            <header className="flex max-w-[100vw] h-16 bg-[#383838] text-white p-4 shadow-md justify-between">
                <div className="flex flex-row justify-start items-center gap-4">
                    <button
                        className="cursor-pointer"
                        onClick={props.onMenuClick}
                    >
                        <BsMenuUp size={20} />
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={props.onNewChatClick}
                    >
                        <FiEdit size={20} />
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={props.onSettingsClick}
                    >
                        <IoSettingsOutline size={20} />
                    </button>
                    <button
                        className="cursor-pointer"
                        onClick={props.onHelpClick}
                    >
                        <IoIosHelpCircleOutline size={20} />
                    </button>
                    <h2 className="font-mono font-medium text-xl">
                        Hackathon Warriors Chatbot
                    </h2>
                </div>
                <button className="font-mono font-medium text-lg flex items-center justify-center text-center">
                    <div className="flex rounded-full bg-[#646464] w-[40px] h-[40px] align-middle shadow-md justify-center items-center text-center text">
                        QH
                    </div>
                </button>
            </header>
            <section className="flex flex-col justify-start items-center h-full">
                {props.chat.length < 0 ? (
                    <div className="flex flex-col items-center justify-start pt-20 border border-red-500 w-[90%] pb-5 overflow-y-visible max-h-[80%]">
                        <div className="flex flex-col w-[75%] border border-red-500 ">
                            <h1 className="text-4xl text-white">
                                Hi Qusai Hroub
                            </h1>
                            <h1 className="text-4xl text-white">
                                How can I help you today
                            </h1>
                        </div>
                    </div>
                ) : (
                    <div
                        ref={scrollRef}
                        className="flex flex-col scroll-m-1 overflow-auto mt-5 items-center justify-start gap-6 pb-5  w-[90%] h-[80%]"
                    >
                        {props.chat.map((singleChat) => {
                            return (
                                <div className="flex flex-row w-[75%] gap-4">
                                    <div className="flex h-full">
                                        <img
                                            className="flex  rounded-full h-[50px] w-[50px]"
                                            src={
                                                singleChat.sender === "bot"
                                                    ? "data:image/jpeg;base64,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"
                                                    : "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-row p-2 text-white rounded-md bg-[#666666] shadow-sm w-[90%]">
                                        {singleChat.text}
                                    </div>
                                    {singleChat.sender === "bot" && (
                                        <div>
                                            <AiOutlineLike size={20} />
                                            <AiOutlineDislike size={20} />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
                <div className="flex flex-row justify-center items-center  h-[10%] w-[90%]">
                    <div className="flex items-center justify-between p-6 w-[80%] h-[80%] rounded-full bg-[#666666] shadow-md">
                        <form
                            action=""
                            onSubmit={props.handleSubmit}
                            className="flex w-[95%]"
                        >
                            <input
                                onChange={(e) => props.setText(e.target.value)}
                                type="text"
                                value={props.text}
                                className="flex p-2 text-white h-[30px] w-[95%] bg-[#666666] font-mono text-xl"
                                placeholder="Message Hackathon Warriors Chatbot"
                            />
                        </form>
                        <div className="flex text-white justify-center items-center cursor-pointer shadow-md rounded-full bg-slate-500 w-[40px] h-[40px]">
                            <MdOutlineAttachFile
                                color="white"
                                className="text-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChatBox;
