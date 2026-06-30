import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { KebabCase, KebabCaseUrl } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const separatorIn = " " as const;
export const separatorOut = "-" as const;

export const getKebabCase = <T extends string>(str: T) =>
  str.toLowerCase().replaceAll(separatorIn, separatorOut) as KebabCase<T>;

export const getUrl = <T extends string>(str: T): KebabCaseUrl<T> =>
  `/${getKebabCase(str)}`;

export const keys = <T extends Record<string, unknown>>(obj: T) =>
  Object.keys(obj) as (keyof T)[];

export const entries = <T extends Record<string, unknown>>(obj: T) =>
  Object.entries(obj) as [keyof T, T[keyof T]][];
