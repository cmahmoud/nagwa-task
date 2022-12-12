import React from "react";
import Banner from "../assets/banner.png";
import { Link } from "react-router-dom";

function HomeScreen() {
    return (
        <div>
            <main className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                <div className="w-full md:w-1/2">
                    <img
                        className="max-w-full max-h-96 mx-auto md:max-h-full"
                        src={Banner}
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4">
                    <h1 className="text-6xl font-bold">Nagwa Task</h1>
                    <p className="w-10/12 md:w-2/3 text-center mb-2 md:mb-6 font-medium text-gray-600">
                        In English language, words can be categorized according
                        to their syntactic functions, which is known as "Part of
                        Speech".
                    </p>
                    <Link
                        to="/practice"
                        className="text-xl px-20 py-3 bg-indigo-700 text-white rounded-lg"
                    >
                        Start new task
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default HomeScreen;
