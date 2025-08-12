import dotenv from "dotenv";

dotenv.config();

export const GetBaseUrl = () :string => {
    const API_BASE = process.env.NODE_ENV === "production"
        ? process.env.API_URL
        : process.env.API_URL_DEV;

    if (!API_BASE) {
        throw new Error("API_BASE is not defined. Check your environment variables.");
    }

    return API_BASE;
}
