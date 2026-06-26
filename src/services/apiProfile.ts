import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProfileReq, ProfileRes } from "../interfaces/profile";

export const apiProfile = createApi({
    reducerPath: 'apiProfile',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-absensi-liart.vercel.app' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://103.163.161.201:5000' }),
    endpoints: build => ({
        postProfile: build.mutation<ProfileRes, ProfileReq>({
            query: body => ({
                url: '/profile',
                method: 'POST',
                body
            })
        })
    })
})

export const { usePostProfileMutation } = apiProfile;