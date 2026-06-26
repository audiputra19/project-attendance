import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListReportReq, ListReportRes, MainReportReq, MainReportRes } from "../interfaces/report";

export const apiReport = createApi({
    reducerPath: 'apiReport',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-absensi-liart.vercel.app' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://103.163.161.201:5000' }),
    endpoints: build => ({
        mainReport: build.mutation<MainReportRes, MainReportReq>({
            query: body => ({
                url: '/report/main',
                method: 'POST',
                body
            })
        }),
        listReport: build.mutation<ListReportRes[], ListReportReq>({
            query: body => ({
                url: '/report/list',
                method: 'POST',
                body
            })
        })
    })
})

export const { useMainReportMutation, useListReportMutation } = apiReport;