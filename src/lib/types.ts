import type { separatorIn, separatorOut } from "./utils";

export type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};

export type Options<T extends string[] = string[]> = {
  options: T;
  defaultOption: T[number];
};
export type KebabCase<
  T extends string,
  U extends string = "",
> = T extends `${infer R extends string}${infer Rest}`
  ? R extends typeof separatorIn
    ? KebabCase<Rest, `${U}${typeof separatorOut}`>
    : KebabCase<Rest, `${U}${Lowercase<R>}`>
  : U;

export type KebabCaseUrl<T extends string> = `/${KebabCase<T>}`;
