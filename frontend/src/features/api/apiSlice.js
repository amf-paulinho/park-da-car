import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AppConfig from '../../App.config';

const TAG = 'Parkings'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: AppConfig.BackendEndpoint }),
	tagTypes: [TAG],
	endpoints: (builder) => ({
		getParkings: builder.query({
			query: () => '/parkings.json',
			//transformResponse: res => res.filter((a, b) => b.id - a.id),
			providesTags: [TAG]
		}),

		addParking: builder.mutation({
			query: (parking) => ({
				url: '/parkings.json',
				method: 'POST',
				body: parking
			}),
			invalidatesTags: [TAG]
		}),

		updateParking: builder.mutation({
			query: (parking) => ({
				url: `/parkings/${parking.id}.json`,
				method: 'PUT', //'PATCH',
				body: parking
			}),
			invalidatesTags: [TAG]
		}),

		deleteParking: builder.mutation({
			query: ({ id }) => ({
				url: `/parkings/${id}.json`,
				method: 'DELETE',
				body: id
			}),
			invalidatesTags: [TAG]
		}),
	})
})

export const {
	useGetParkingsQuery,
	useAddParkingMutation,
	useUpdateParkingMutation,
	useDeleteParkingMutation
} = apiSlice