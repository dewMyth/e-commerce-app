import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGUxNjcxNThlZWYzOGY0MjYzOTJiNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTEwNzM1OCwiZXhwIjoxNjU5MzY2NTU4fQ.ES4zdore13rM6jxGaKEXrHh_xz2fbxvOivjuy7dV3kQ";
// const TOKEN = localStorage.getItem("token");

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
