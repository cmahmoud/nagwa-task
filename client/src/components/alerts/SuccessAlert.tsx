import React from "react";

function SuccessAlert() {
    return (
        <div
            className="flex items-center p-4 text-sm text-green-700 bg-green-100 rounded-lg"
            role="alert"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-3"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                />
            </svg>

            <span className="sr-only">Info</span>
            <span className="font-semibold">Correct Answer</span>
        </div>
    );
}

export default SuccessAlert;
