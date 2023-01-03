import axios from "axios"
import { URL_API } from "../env"
export const api = axios.create({
    baseURL: URL_API
})