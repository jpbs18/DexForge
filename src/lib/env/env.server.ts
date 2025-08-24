export const BASE_URL: string =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_API_URL_PROD!
    : process.env.NEXT_PUBLIC_API_URL_DEV!;

export const TOTAL_AMOUNT: number = Number(process.env.TOTAL_AMOUNT);
export const PREFETCH_LIMIT_PER_PAGE: number = Number(
  process.env.PREFETCH_LIMIT_PER_PAGE
);
