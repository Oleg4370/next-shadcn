import { DBType, UserType } from "@/types";
import { headers } from "next/headers";

export const getUsers = async (): Promise<UserType[]> => {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") || headersList.get("host");
  const protocol =
    process.env.NODE_ENV === "production" ? "https://" : "http://";
  const fullUrl = `${protocol}${host}`;

  const data = await fetch(`${fullUrl}/db.json`);
  const res = (await data.json()) as DBType;

  return res.users;
};
