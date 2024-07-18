import { BACKEND_URI } from "@/config";
import api from "axios";
const baseurl = BACKEND_URI;

export const axios = api.create({
  baseURL: baseurl,
});
