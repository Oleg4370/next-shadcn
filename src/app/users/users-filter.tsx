"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FieldGroup, FieldLabel, Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type FilterField = "call_sign" | "full_name" | "position";

interface UsersFilterProps {
  query?: string;
  field?: FilterField;
  onQueryChange: (value: string) => void;
  onFieldChange: (value: FilterField) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function UsersFilter({
  query,
  field,
  onQueryChange,
  onFieldChange,
  onSubmit,
}: UsersFilterProps) {
  return (
    <form onSubmit={onSubmit}>
      <FieldGroup className="grid w-full sm:grid-cols-3 items-end xs:grid-cols-1">
        <Field>
          <FieldLabel htmlFor="users-search">Пошук</FieldLabel>
          <Input
            id="users-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Введіть текст для пошуку..."
          />
        </Field>
        <Field>
          <FieldLabel>Поле</FieldLabel>
          <Select
            value={field}
            onValueChange={(value) => onFieldChange(value as FilterField)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Виберіть поле" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="call_sign">Позивний</SelectItem>
              <SelectItem value="full_name">ПІП</SelectItem>
              <SelectItem value="position">Посада</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <Button type="submit">Застосувати</Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
