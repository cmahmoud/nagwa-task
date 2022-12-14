import React from "react";

type IProps = {
    rank: number;
};

function ProgressCircle({ rank }: IProps) {
    const arcLength = 2 * 3.14 * 150;
    const arcOffset = arcLength * ((100 - rank) / 100);
    return (
        <svg className="w-80 h-80 align-middle">
            <circle
                cx="160px"
                cy="160px"
                r="150px"
                strokeWidth="10px"
                fill="transparent"
                stroke="#c7d2fe"
                strokeLinecap="round"
            />
            <circle
                className="circle origin-center -rotate-90"
                cx="160px"
                cy="160px"
                r="150px"
                strokeWidth="10px"
                fill="transparent"
                stroke="#3730a3"
                strokeDasharray={arcLength}
                strokeDashoffset={arcOffset}
                strokeLinecap="round"
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                stroke="currentcolor"
                strokeWidth="0px"
                dy=".3em"
                className="text-5xl fill-indigo-700"
            >
                {rank}%
            </text>
        </svg>
    );
}

export default ProgressCircle;
