"use client";

import type React from "react";
import { useMemo, useState } from "react";

import { DataTable } from "@/components/ui/data-table";
import { userColumnsConfig } from "@/lib/config";
import { UserType } from "@/types";
import { FilterField, UsersFilter } from "./users-filter";

interface UsersTableProps {
  data: UserType[];
}

export function UsersTable({ data }: UsersTableProps) {
  const [filterField, setFilterField] = useState<FilterField>();
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [submittedField, setSubmittedField] = useState<FilterField>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = query.trim();

    if (!trimmed) {
      setSubmittedQuery("");
      return;
    }

    setSubmittedQuery(trimmed);
    setSubmittedField(filterField);
  };

  const filteredData = useMemo(() => {
    if (!submittedQuery || !submittedField) {
      return data;
    }

    const q = submittedQuery.toLowerCase();

    return data.filter((user) => {
      const value = String(user[submittedField] ?? "").toLowerCase();
      return value.includes(q);
    });
  }, [data, submittedField, submittedQuery]);

  return (
    <div className="flex w-full flex-col gap-4">
      <UsersFilter
        query={query}
        field={filterField}
        onQueryChange={setQuery}
        onFieldChange={setFilterField}
        onSubmit={handleSubmit}
      />

      <DataTable columns={userColumnsConfig} data={filteredData} />
    </div>
  );
}
