import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IRank, IWord } from "../types";
import { addTasks, setRank } from "./appSlice";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (builder) => ({
        // get all task from "/api/task/words"
        getTasks: builder.query<IWord[], string>({
            query: () => "/api/task/words",
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(addTasks(data));
            },
        }),
        // calculate rank from /api/task/rank
        // post request
        calculateRank: builder.mutation<IRank, number>({
            query: (data) => ({
                url: "/api/task/rank",
                method: "POST",
                body: { score: data },
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                const { data } = await queryFulfilled;
                dispatch(setRank(data.rank));
            },
        }),
    }),
});
export const { useGetTasksQuery, useCalculateRankMutation } = taskApi;
