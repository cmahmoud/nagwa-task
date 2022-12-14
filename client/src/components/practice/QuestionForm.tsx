import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
    addScore,
    changeQuestion,
    completeQuestion,
    setLastTask,
    setTaskCompleted,
} from "../../store/appSlice";
import { RootState } from "../../store/store";
import ErrorAlert from "../alerts/ErrorAlert";
import SuccessAlert from "../alerts/SuccessAlert";
import QuestionOptions from "./QuestionOptions";
import { useNavigate } from "react-router-dom";
import { useCalculateRankMutation } from "../../store/taskApi";

function QuestionForm(): JSX.Element {
    // calculate rank mutation
    const [calculateRank] = useCalculateRankMutation();
    // animate appearance of alerts
    const [parent] = useAutoAnimate<HTMLFormElement>({ duration: 500 });
    const [isAnswered, setIsAnswered] = React.useState<boolean>(false);
    const [isCorrect, setIsCorrect] = React.useState<boolean>(false);
    const [isWrong, setIsWrong] = React.useState<boolean>(false);
    const [optionValue, setOptionValue] = React.useState<null | string>(null);
    // get app state
    const state = useSelector((state: RootState) => state.app);
    // redux dispatcher
    const dispatch = useDispatch();
    // navigation hook
    const navigate = useNavigate();

    // handle navigation to next question
    const navigateToNextQuestion = async (): Promise<void> => {
        // get current question index
        const currentIndex: number = state.tasks.findIndex(
            (item) => item.id === state.currentQuestion.id
        );
        // check if it the task before last
        const isQuestionBeforeLast: boolean =
            currentIndex === state.tasks.length - 2;

        // if the current question is before last set last task true and change question
        // else if is last question send post request to /api/task/rank then navigate to rank page
        // else change question
        if (isQuestionBeforeLast) {
            dispatch(changeQuestion(currentIndex + 1));
            dispatch(setLastTask());
        } else if (state.isLastTask) {
            dispatch(setTaskCompleted());
            // send post request to /api/task/rank endpoint to calculate the rank
            await calculateRank(state.score)
                .unwrap()
                .then(() => navigate("/rank"));
        } else {
            dispatch(changeQuestion(currentIndex + 1));
        }
        // return default states
        setIsAnswered(false);
        setIsCorrect(false);
        setIsWrong(false);
    };
    // handle answer question
    const handleFormSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        // check if the is answer is correct or not
        const isCorrectAnswer: boolean =
            optionValue === state.currentQuestion.pos;

        // if correct answer show success message and increase score with 10 points
        // else show wrong message
        if (isCorrectAnswer) {
            setIsCorrect(true);
            dispatch(addScore());
        } else {
            setIsWrong(true);
        }
        // increase completed question progress with 1
        dispatch(completeQuestion());
        // set states to default
        setIsAnswered(true);
        setOptionValue(null);
    };
    return (
        <form
            className="flex flex-col gap-4"
            onSubmit={handleFormSubmit}
            ref={parent}
        >
            <h2 className="text-xl font-medium">What is the part of speech?</h2>

            {/* show if answer is correct */}
            {isCorrect && <SuccessAlert />}

            {/* show if answer is wrong */}
            {isWrong && <ErrorAlert />}

            {/* question options */}
            <QuestionOptions
                setOptionValue={setOptionValue}
                isWrong={isWrong}
                // pass correct answer to disable correct answer if answer is wrong
                currentAnswer={state.currentQuestion.pos}
            />

            {/* Form Buttons */}
            <div className="flex justify-center gap-4 mt-4">
                {/* Submit Button */}
                <button
                    type="submit"
                    className="submit__btn"
                    disabled={!optionValue}
                >
                    Answer
                </button>

                {/* Navigate To Next Question Button */}
                <button
                    type="button"
                    className="next__btn"
                    onClick={navigateToNextQuestion}
                    disabled={!isAnswered}
                >
                    {state.isLastTask ? "Show rank" : "Next"}
                </button>
            </div>
        </form>
    );
}

export default QuestionForm;
