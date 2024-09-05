import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MainReportReq, MainReportRes } from "../interfaces/report";

export const apiReport = createApi({
    reducerPath: 'apiReport',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-absensi-liart.vercel.app/' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    endpoints: build => ({
        mainReport: build.mutation<MainReportRes, MainReportReq>({
            query: body => ({
                url: '/report/main',
                method: 'POST',
                body
            })
        })
    })
})

export const { useMainReportMutation } = apiReport;