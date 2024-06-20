import React from "react";

const Header = () => {
    return (
        <header className="flex bg-blue-500 text-white p-4 shadow-md">
            <div className="flex-row mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My React App</h1>
                <nav>
                    <ul className="flex flex-row w-full space-x-4">
                        <li>
                            <a href="/" className="hover:underline select-none">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
