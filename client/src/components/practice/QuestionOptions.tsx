import React from "react";

interface IProps {
    setOptionValue: React.Dispatch<React.SetStateAction<string | null>>;
    isWrong: boolean;
    currentAnswer: string | undefined;
}

function QuestionOptions({ setOptionValue, isWrong, currentAnswer }: IProps) {
    // question options
    const options: string[] = ["verb", "noun", "adverb", "adjective"];
    return (
        <>
            {options.map((option, idx) => (
                <div key={idx}>
                    <input
                        id={`${option}Input`}
                        type="radio"
                        value={option}
                        name="answer"
                        className="hidden"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setOptionValue(e.target.value)
                        }
                        disabled={isWrong && currentAnswer === option}
                        required
                    />
                    <label
                        htmlFor={`${option}Input`}
                        className="answer__label transition-colors"
                    >
                        {option}
                    </label>
                </div>
            ))}
        </>
    );
}

export default QuestionOptions;
