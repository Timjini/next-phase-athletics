import { axiosClient } from "./axiosClient"
import {FormValues } from "../types/form";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string

export const apiEndpoints = {
  subscribeAthlete: (formData: FormValues) =>
    axiosClient(`${BASE_URL}/subscribe`, "POST", formData),
}
