import axios from "axios";

const createInstance = () => {
  return axios.create({
    baseURL: "https://dpg.gg/test/calendar.json",
    timeout: +20000,
  });
};

export const axiosProject = createInstance();
