import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ThrReq, ThrRes } from "../interfaces/thr";

export const apiThr = createApi({
    reducerPath: 'apiThr',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://175.176.161.133/skn/audi/dataku-react' 
    }),
    endpoints: build => ({
        postThr: build.mutation<ThrRes, ThrReq>({
            query: body => ({
                url: '/api_thr.php',
                method: 'POST',
                body
            })
        })
    }),
})

export const { usePostThrMutation } = apiThr;