import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios"

type RequestHeaders = Record<string, string>
type RequestData = Record<string, unknown> | undefined

export async function axiosClient<T = unknown>(
  url: string,
  method: Method,
  data?: RequestData,
  headers?: RequestHeaders
): Promise<AxiosResponse<T>> {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  }

  try {
    const response = await axios<T>(config)
    return response
  } catch (error) {
    console.error("Axios error:", error)
    throw error
  }
}
