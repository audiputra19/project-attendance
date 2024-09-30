import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { leaveReq, leaveRes } from "../interfaces/leave";

export const apiLeave = createApi({
    reducerPath: 'apiLeave',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: build => ({
        postLeave: build.mutation<leaveRes, leaveReq>({
            query: body => ({
                url: '/leave',
                method: 'POST',
                body
            })
        })
    })
})

export const { usePostLeaveMutation } = apiLeave;