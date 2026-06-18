const separatorIn = " " as const;
const separatorOut = "-" as const;
const sections = [
  ["Overview"],
  ["Setup", ["Rom Patcher JS", "Hack Dex"]],
  [
    "Features",
    [
      "Permanent Repel",
      "Running",
      "Level Cap",
      "Better Summary",
      "Physical-Special split",
      "Pocket Tutor",
      "Better Evolutions",
      "Adopt Eggs",
      "Pocket PC",
      "Pocket Heal",
      "Forget HMs",
      "Infinite TMs",
      "Pocket Mart",
      "1$ Items",
      "Pocket Bikes",
      "Auto Blend",
      "Custom Blend",
      "Badge Boost",
      "EV Training",
      "Catch Rate",
      "Fast Eggs",
      "Instant Fishing",
      "Always Feebas",
      "Better Safari",
      "No Fleeing Mons",
      "Instant Text",
      "Music",
    ],
  ],
  ["Credits"],
  ["Plans"],
] as const satisfies Sections;

const getUrl = <T extends string>(str: T) =>
  `/${str.toLowerCase().replaceAll(separatorIn, separatorOut)}` as `${KebabCaseUrl<T>}`;

const getMenuItems = <T extends Sections>(sections: T) =>
  sections.map(([section, subSections]) => ({
    title: section,
    url: getUrl(section),
    items: (subSections ?? []).map((subSection) => ({
      title: subSection,
      url: `${getUrl(section)}${getUrl(subSection)}`,
    })),
  })) as MenuData<T>;

export const menuItems = getMenuItems(sections);

type Prettify<T> = {
  [k in keyof T]: T[k];
} & {};

type Section = [string] | [string, string[]];

type Sections = Section[];

type KebabCase<
  T extends string,
  U extends string = "",
> = T extends `${infer R extends string}${infer Rest}`
  ? R extends typeof separatorIn
    ? KebabCase<Rest, `${U}${typeof separatorOut}`>
    : KebabCase<Rest, `${U}${Lowercase<R>}`>
  : U;

type KebabCaseUrl<T extends string> = `/${KebabCase<T>}`;

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

type MenuItem<T extends Section, U extends unknown[] = []> = T extends [
  infer R extends string,
  infer S extends string[],
]
  ? [...U, Prettify<MenuItemContent<R> & { items: MenuSubItems<S, R> }>]
  : T extends [infer R extends string]
    ? [...U, Prettify<MenuItemContent<R> & { items: [] }>]
    : U;

type MenuData<T extends Sections, U extends unknown[] = []> = T extends [
  infer R extends Section,
  ...infer S extends Sections,
]
  ? MenuData<S, [...U, ...MenuItem<R>]>
  : U;
