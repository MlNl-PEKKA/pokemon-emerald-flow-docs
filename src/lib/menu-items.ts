/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */

import { featureTitles } from "./feature-list";
import type { KebabCase, KebabCaseUrl, Prettify } from "./types";
import { getKebabCase, getUrl } from "./utils";
const sections = [
  ["Overview"],
  ["Setup", ["Rom Patcher JS", "Hack Dex"]],
  ["Features", featureTitles],
  ["Credits"],
  ["Plans"],
] as const satisfies Sections;

const getMenuItems = <T extends Sections>(sections: T) =>
  sections.map(([section, subSections]) => ({
    title: section,
    url: getUrl(section),
    items: (subSections ?? []).map((subSection) => ({
      title: subSection,
      url: `${getUrl(section)}${getUrl(subSection)}`,
    })),
  })) as MenuData<T>;

const getPages = <T extends Sections>(sections: T) => {
  return sections.reduce(
    (acc, [section, subSections]) => {
      const sectionName = getKebabCase(section);
      acc[sectionName] = {
        title: section,
        url: getUrl(section),
      };
      subSections?.forEach((subSection) => {
        const subSectionName = getKebabCase(subSection);
        acc[sectionName]![subSectionName] = {
          title: subSection,
          url: `${getUrl(section)}${getUrl(subSection)}`,
        };
      });
      return acc;
    },
    {} as Record<string, SectionPage>,
  ) as PageData<T>;
};

const getPageTitles = <T extends Sections>(sections: T) => {
  return sections.reduce(
    (acc, [section, subSections]) => {
      acc[getUrl(section)] = section;
      subSections?.forEach((subSection) => {
        acc[`${getUrl(section)}${getUrl(subSection)}`] = subSection;
      });
      return acc;
    },
    {} as Record<string, string>,
  ) as UrlToPage<T>;
};

export const menuItems = getMenuItems(sections);

export const pages = getPages(sections);

export const pageTitles = getPageTitles(sections);

export type Urls = (typeof pageTitles)[keyof typeof pageTitles];

export type Section = [string] | [string, string[]];

type Sections = Section[];

type MenuItemContent<T extends string = string, U extends string = ""> = {
  title: T;
  url: U extends ""
    ? `${KebabCaseUrl<T>}`
    : `${KebabCaseUrl<U>}${KebabCaseUrl<T>}`;
};

type MenuSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends unknown[] = [],
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? MenuSubItems<Rest, S, [...U, Prettify<MenuItemContent<R, S>>]>
  : U;

type MenuItem<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? Prettify<MenuItemContent<R> & { items: MenuSubItems<S, R> }>
  : T extends [infer R extends string]
    ? Prettify<MenuItemContent<R> & { items: [] }>
    : never;

type MenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? MenuData<S, [...U, MenuItem<R>]>
  : U;

type Page = { title: string; url: string };

type SectionPage = {
  title: string;
  url: string;
  [key: string]: Page | string;
};

type PageSubItems<
  T extends string[] = string[],
  S extends string = "",
  U extends object = {},
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? PageSubItems<
      Rest,
      S,
      U & { [key in `${KebabCase<R>}`]: Prettify<MenuItemContent<R, S>> }
    >
  : U;

type PageItem<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? {
      [key in `${KebabCase<R>}`]: Prettify<
        MenuItemContent<R> & PageSubItems<S, R>
      >;
    }
  : T extends [infer R extends string]
    ? {
        [key in `${KebabCase<R>}`]: Prettify<MenuItemContent<R>>;
      }
    : never;

type PageData<
  T extends Sections,
  U extends Record<string, SectionPage> = {},
> = Prettify<
  T extends [infer R extends Section, ...infer S extends Sections]
    ? PageData<S, U & PageItem<R>>
    : U
>;

type UrlToPageSubTitles<
  T extends string[] = string[],
  S extends string = "",
  U extends object = {},
> = T extends [infer R extends string, ...infer Rest extends string[]]
  ? UrlToPageSubTitles<
      Rest,
      S,
      U & {
        [key in `${KebabCaseUrl<S>}${KebabCaseUrl<R>}`]: R;
      }
    >
  : U;

type UrlToPageTitle<T extends Section> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? {
      [key in `${KebabCaseUrl<R>}`]: R;
    } & UrlToPageSubTitles<S, R>
  : T extends [infer R extends string]
    ? {
        [key in `${KebabCaseUrl<R>}`]: R;
      }
    : never;

type UrlToPage<
  T extends Sections,
  U extends Record<string, Page> = {},
> = Prettify<
  T extends [infer R extends Section, ...infer S extends Sections]
    ? UrlToPage<S, U & UrlToPageTitle<R>>
    : U
>;
