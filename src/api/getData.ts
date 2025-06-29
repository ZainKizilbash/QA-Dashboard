import axios from 'axios';
import type { ApiResponse, ApiStatus } from '../interface';

export default async function getData () : Promise<ApiResponse> {
    try{
        const response = await axios.get("http://localhost:3000/healthstatus/check")
        const rawData = response.data;
        const data: ApiStatus[] = Array.isArray(rawData) ? rawData : [rawData];

        return {
            data,
            status: response.status,
            message: response.statusText
        }

    } catch (error : any) {
        return {
            data: null,
            status: error.status,
            message: error.message
        }

    }
}