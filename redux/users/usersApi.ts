import { api } from "../api";

const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.mutation({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserMutation } = userApi;
