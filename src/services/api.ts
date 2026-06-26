import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://api-absensi-liart.vercel.app',
    // baseUrl: 'http://localhost:5000',
    // baseUrl: 'http://103.163.161.201:5000',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token;
        if(token){
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
});

export const apiAuth = createApi({
    reducerPath: 'api',
    baseQuery,
    endpoints: () => ({}),
})