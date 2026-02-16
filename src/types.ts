import type { RankType } from "@/lib/const";

export interface User {
  id: number;
  full_name: string;
  call_sign: string;
  token_number: string;
  date_of_birth: string;
  registration_date: string;
  phone: string;
  rank: RankType;
  position: string;
  contact_person: ContactPersonType;
  work_email: string;
}

export interface ContactPersonType {
  full_name: string;
  relationship: string;
  phone: string;
}
