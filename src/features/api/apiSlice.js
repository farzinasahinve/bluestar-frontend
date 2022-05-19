import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = "https://faac6dbw50.execute-api.us-east-1.amazonaws.com/dev/"
export const apiSlice = createApi({
    reducerPath:'dev',
    baseQuery: fetchBaseQuery({baseUrl}),
    tagTypes:['login'],
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(loginData)=>({
                //url:'/company-login',
                url:'/login',
                method:'POST',
                body:loginData
            }),
            invalidatesTags:['login']
        }),
        getCompanies:builder.query({
            query:()=>'/companies'
        }),
        createCompany:builder.mutation({
            query:(companyData) => ({
                url:'/add-company',
                method:'POST',
                body:companyData
            })
        }),
        updateCompany:builder.mutation({
            query:(companyData)=>({
                url:'/manage-company',
                method:'POST',
                body:companyData
            })
        })

    })
})

export const {
    useLoginMutation,
    useGetCompaniesQuery,
    useUpdateCompanyMutation
} = apiSlice