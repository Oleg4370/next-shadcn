"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ContactPersonType, UserType } from "@/types";

export const userColumnsConfig: ColumnDef<UserType>[] = [
  {
    accessorKey: "full_name",
    header: "ПІП",
  },
  {
    accessorKey: "call_sign",
    header: "Позивний",
    enableSorting: false,
  },
  {
    accessorKey: "token_number",
    header: "Номер жетона",
    enableSorting: false,
  },
  {
    accessorKey: "date_of_birth",
    header: "Дата народження",
    enableSorting: true,
    sortingFn: "datetime",
  },
  {
    accessorKey: "registration_date",
    header: "Дата оформлення",
  },
  {
    accessorKey: "phone",
    header: "Номер телефону",
    enableSorting: false,
  },
  {
    accessorKey: "rank",
    header: "Звання",
    enableSorting: false,
  },
  {
    accessorKey: "position",
    header: "Посада",
    enableSorting: false,
  },
  {
    accessorFn: (row) => getContactPerson(row.contact_person),
    header: "Контактна особа",
    enableSorting: false,
  },
  {
    accessorKey: "work_email",
    header: "Робочий email",
    enableSorting: false,
  },
];

export const getContactPerson = (cp: ContactPersonType) =>
  `${cp.full_name} (${cp.relationship}) - ${cp.phone}`;
