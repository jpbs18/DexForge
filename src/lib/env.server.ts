import dotenv from "dotenv";
dotenv.config();

export const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? process.env.API_URL_PROD!
    : process.env.API_URL_DEV!;

export const PREFETCH_LIMIT_PER_PAGE: number = Number(
  process.env.PREFETCH_LIMIT_PER_PAGE
);
