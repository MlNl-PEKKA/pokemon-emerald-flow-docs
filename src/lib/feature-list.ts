/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { KebabCase, Prettify } from "./types";
import { getKebabCase } from "./utils";

const VANILLA_GAMEPLAY = "Vanilla gameplay";

const getOptions = <T>(
  options: T extends Options<infer _ extends Option[]>
    ? T
    : `type does not match {options: T, defaultOption: T[number][0]}`,
) => {
  if (typeof options === "string") throw new Error("Invalid object");
  return options;
};

const activeText = <T extends string>(str: T) =>
  `${str} is now active` as const;
const startScreenText = <T extends string>(str: T) =>
  `${str} is now available in the start screen` as const;

export const featureList = [
  [
    "Permanent Repel",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", activeText("Permanent repel")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Running",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["Indoor", "Hold B to run including indoors"],
        ["Perma", "No need to hold B to run"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Level Cap",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Enforces a level cap until the next major battle."],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "No HM Slave",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("MOVES")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Summary",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", activeText("Better Summary")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Physical-Special Split",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", activeText("Physical-Special Split")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Tutor",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("TUTOR")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Evolutions",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["Lvl.30", "Pokemon evolve at Level 30"],
        ["Item", "Pokemon evolve during level up with a held item"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Adopt Eggs",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Daycare lady provides eggs for adoption"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket PC",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("PC")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Heal",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("HEAL")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Forget HMs",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "HMs can now be forgotten"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Infinite TMs",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "TMs do not run out"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Mart",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("MART")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "One$ Items",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Items now cost 1$"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Pocket Bikes",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", startScreenText("BIKES")],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Auto Blend",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Berry blending is now automatic and perfect"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Custom Blend",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Choose berries for all NPCs from bag"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Badge Boost",
    getOptions({
      options: [
        ["Off", "Badge boosts are now turned off"],
        ["On", VANILLA_GAMEPLAY],
      ],
      defaultOption: "On",
    } as const),
  ],
  [
    "EV Training",
    getOptions({
      options: [
        ["Off", "Any EV gains are turned off"],
        ["On", VANILLA_GAMEPLAY],
        ["Vitamin", "Vitamins cap at 252EV, Berries at -1EV"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Perfect Catches",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Pokemon do not escape from Pokeball"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Fast Eggs",
    getOptions({
      options: [
        ["1x", VANILLA_GAMEPLAY],
        ["4x", "Eggs generate and hatch 4x faster"],
        ["10x", "Eggs generate and hatch 10x faster"],
      ],
      defaultOption: "1x",
    } as const),
  ],
  [
    "Instant Fishing",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Dot and hook games are skipped"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Always Feebas",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Fishing encounters on Route 119 are always Feebas"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Better Safari",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Step and Safari ball counters are disabled"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "No Fleeing Mons",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Safari and Roaming Pokemon do not flee"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Instant Text",
    getOptions({
      options: [
        ["Off", VANILLA_GAMEPLAY],
        ["On", "Text prints instantly"],
      ],
      defaultOption: "Off",
    } as const),
  ],
  [
    "Music",
    getOptions({
      options: [
        ["Off", "Background music stops playing"],
        ["On", VANILLA_GAMEPLAY],
      ],
      defaultOption: "On",
    } as const),
  ],
] as const satisfies FeatureList;

const getFeatures = <T extends FeatureList>(sections: T) => {
  return sections.reduce(
    (acc, [section, { defaultOption, options }]) => {
      const sectionName = getKebabCase(section);
      acc[sectionName] = {
        title: section,
        options: options.map(([title, description]) => ({
          title,
          description,
        })),
        defaultOption,
      };
      options.forEach(([title, description]) => {
        acc[sectionName]![getKebabCase(title)] = {
          title,
          description,
        };
      });
      return acc;
    },
    {} as Record<string, any>,
  ) as Features<T>;
};

export const features = getFeatures(featureList);

export const featureTitles = featureList.map(
  ([title]) => title,
) as FeatureTitles;

type Option = [string, string];

type Options<T extends Option[] = Option[]> = {
  options: T;
  defaultOption: NoInfer<T>[number][0];
};
type FeatureList = [string, Options][];

type FeatureTitles<
  T extends FeatureList = typeof featureList,
  U extends string[] = [],
> = T extends [
  infer R extends FeatureList[number],
  ...infer Rest extends FeatureList,
]
  ? FeatureTitles<Rest, [...U, R[0]]>
  : U;

type OptionObject<T extends Option = Option> = {
  title: T[0];
  description: T[1];
};
type AccumulateOptions<T extends Option[], U extends object = {}> = T extends [
  infer R extends Option,
  ...infer Rest extends Option[],
]
  ? AccumulateOptions<
      Rest,
      Prettify<
        U & {
          [key in `${KebabCase<R[0]>}`]: Prettify<OptionObject<R>>;
        }
      >
    >
  : U;

type CleanOptions<
  T extends Option[],
  U extends OptionObject[] = [],
> = T extends [infer R extends Option, ...infer Rest extends Option[]]
  ? CleanOptions<Rest, [...U, Prettify<OptionObject<R>>]>
  : U;

type Features<
  T extends FeatureList = typeof featureList,
  U extends object = {},
> = T extends [
  infer R extends FeatureList[number],
  ...infer Rest extends FeatureList,
]
  ? Features<
      Rest,
      Prettify<
        U & {
          [key in `${KebabCase<R[0]>}`]: Prettify<
            {
              title: R[0];
              defaultOption: R[1]["defaultOption"];
              options: CleanOptions<R[1]["options"]>;
            } & AccumulateOptions<R[1]["options"]>
          >;
        }
      >
    >
  : U;
