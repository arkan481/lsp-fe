import axios from "axios";
import { PCItem, FetchResponse, CreatePc } from "@/typings";

const createPc = async (pc: CreatePc): Promise<FetchResponse<PCItem>> => {
  const resReturn: FetchResponse<PCItem> = { data: null, error: null };
  try {
    const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/pc`, pc);
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

export default createPc;
