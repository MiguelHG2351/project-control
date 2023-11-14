import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.2:3000' }),
  tagTypes: ['Cats'],
  endpoints: (builder) => ({
    getMyCats: builder.query({
      query: () => ({
        url: '/my-cats',
        method: 'GET',
      }),
      providesTags: ['Cats'],
    })
  })
})

export const { useGetMyCatsQuery } = api
