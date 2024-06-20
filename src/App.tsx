import React from "react";
import "./App.css";
import { ChatBox } from "./components";

interface IChat {
    sender: "bot" | "user";
    text: string;
}

const App = () => {
    const test = () => {};
    const [text, setText] = React.useState("");
    const [chat, setChat] = React.useState<IChat[]>([]);
    const handleEnter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setText("");
        setChat([
            ...chat,
            { text: text, sender: "user" },
            { text: "Your message accepted", sender: "bot" },
        ]);
        console.log(chat);
    };
    return (
        <div className="flex h-[100vh] w-[100vw]">
            <ChatBox
                chat={chat}
                text={text}
                setText={setText}
                onMenuClick={test}
                onNewChatClick={test}
                onSettingsClick={test}
                onHelpClick={test}
                isEmptyChat={false}
                handleSubmit={handleEnter}
            />
        </div>
    );
};

export default App;
