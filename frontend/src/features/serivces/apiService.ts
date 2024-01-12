import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const TESTING_PATH = "http://127.0.0.1:8000/api/";
// const REMOTE_PATH = "https://hospital-auththentication-app.onrender.com/blog/";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TESTING_PATH,
  }),
  endpoints: (builder) => ({
    about: builder.query({
      query: () => {
        return {
          url: "about/",
          method: "GET",
        };
      },
    }),
    projects: builder.query({
      query: () => {
        return {
          url: "projects/",
          method: "GET",
        };
      },
    }),
    skills: builder.query({
      query: () => {
        return {
          url: "skills/",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAboutQuery, useProjectsQuery, useSkillsQuery } = appApi;
