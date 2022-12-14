import React from "react";

function ErrorAlert() {
    return (
        <div
            className="flex p-4 text-sm text-red-700 bg-red-100 rounded-lg"
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
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>

            <span className="sr-only">Info</span>
            <span className="font-medium">Wrong Answer</span>
        </div>
    );
}

export default ErrorAlert;
