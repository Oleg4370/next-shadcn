import { DBType, UserType } from "@/types";

export const getUsers = async (): Promise<UserType[]> => {
  const data = await fetch("http://localhost:3000/db.json");
  const res = (await data.json()) as DBType;

  return res.users;
};
