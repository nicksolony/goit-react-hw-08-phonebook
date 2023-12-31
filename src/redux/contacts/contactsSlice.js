import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com/',
        prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (!headers.has("Authorization") && token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contacts'],
        }),
        addContact: builder.mutation({
            query: data => ({
                url: '/contacts',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useDeleteContactMutation
} = contactsApi;