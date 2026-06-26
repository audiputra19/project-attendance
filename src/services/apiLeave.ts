import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { leaveReq, leaveRes, reportLeaveRes } from "../interfaces/leave";

export const apiLeave = createApi({
    reducerPath: 'apiLeave',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api-absensi-liart.vercel.app' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://103.163.161.201:5000' }),
    // baseQuery: fetchBaseQuery({ 
    //     baseUrl: 'https://app.sknmedical.co.id/skn/hrd/cuti/', 
    // }),
    endpoints: build => ({
        postLeave: build.query<leaveRes, { nik: number | undefined, tahun: number }>({
            query: (data) => ({
                url: `cuti_api.php?nik=${data.nik}&tahun=${data.tahun}`,
                method: 'GET',
            })
        }),
        postReportLeave: build.query<reportLeaveRes, { nik: number | undefined, tahun: number }>({
            query: (data) => ({
                url: `cuti_history_api.php?nik=${data.nik}&tahun=${data.tahun}`,
                method: 'POST',
            })
        })
    })
})

export const { usePostLeaveQuery, usePostReportLeaveQuery } = apiLeave;