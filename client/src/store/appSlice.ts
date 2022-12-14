import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWord, AppState } from "../types";

const initialState: AppState = {
    tasks: [],
    currentQuestion: {},
    isLastTask: false,
    completedQuestions: 0,
    score: 0,
    taskCompleted: false,
    rank: 0,
};
export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        // add fetched questions to store
        addTasks: (state, action: PayloadAction<IWord[]>) => {
            return {
                ...state,
                tasks: action.payload,
                currentQuestion: action.payload[0],
            };
        },
        // change question with payload
        changeQuestion: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                currentQuestion: state.tasks[action.payload],
            };
        },
        // increase the progress of completed questions
        completeQuestion: (state) => {
            return {
                ...state,
                completedQuestions: state.completedQuestions + 1,
            };
        },
        // increase score of successful answered questions
        addScore: (state) => {
            return {
                ...state,
                score: state.score + 10,
            };
        },
        // set the state to last question
        setLastTask: (state) => {
            return {
                ...state,
                isLastTask: true,
            };
        },
        // set the task to finished
        setTaskCompleted: (state) => {
            return {
                ...state,
                taskCompleted: true,
            };
        },
        // set the calculated rank from /api/task/rank endpoint
        setRank: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                rank: action.payload,
            };
        },
        // return the state to defaults to repeat the task
        repeatTask: (state) => {
            return {
                ...state,
                score: 0,
                isLastTask: false,
                taskCompleted: false,
                completedQuestions: 0,
                currentQuestion: state.tasks[0],
            };
        },
    },
});

export const {
    addTasks,
    changeQuestion,
    completeQuestion,
    addScore,
    setLastTask,
    setTaskCompleted,
    setRank,
    repeatTask,
} = appSlice.actions;

export default appSlice.reducer;
