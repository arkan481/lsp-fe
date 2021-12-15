import axios from "axios";
import { Averages, FetchResponse } from "@/typings";

const fetchAverages = async (): Promise<FetchResponse<Averages>> => {
  const resReturn: FetchResponse<Averages> = {
    data: null,
    error: null,
  };

  try {
    const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/avg`);
    resReturn.data = response.data.data;
  } catch (error) {
    if (error instanceof Error) {
      resReturn.error = error.message;
    } else {
      resReturn.error = "Error happened in request";
    }
  }

  return resReturn;
};

export default fetchAverages;
