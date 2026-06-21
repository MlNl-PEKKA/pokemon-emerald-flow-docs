import type { Options, Prettify } from "./types";

const getOptions = <T extends string[]>(options: Prettify<Options<T>>) =>
  options;

const optionsOnOff = getOptions({
  options: ["Off", "On"],
  defaultOption: "Off",
} as const);

const optionsRunning = getOptions({
  options: ["Off", "Indoor", "Perma"],
  defaultOption: "Off",
} as const);

const optionsBetterEvolution = getOptions({
  options: ["Off", "Lvl.30", "Item"],
  defaultOption: "Off",
} as const);

const optionsEVTraining = getOptions({
  options: ["Off", "On", "Vitamin"],
  defaultOption: "On",
} as const);

const optionsCatchRate = getOptions({
  options: ["Off", "100%"],
  defaultOption: "Off",
} as const);

const optionsFastEggs = getOptions({
  options: ["1x", "4x", "8x"],
  defaultOption: "1x",
} as const);

const optionsOnOff_On = getOptions({
  ...optionsOnOff,
  defaultOption: "On",
} as const);

type FeaturesList = [string, Options][];

export const features = [
  ["Permanent Repel", optionsOnOff],
  ["Running", optionsRunning],
  ["Level Cap", optionsOnOff],
  ["No HM Slave", optionsOnOff],
  ["Better Summary", optionsOnOff],
  ["Physical-Special Split", optionsOnOff],
  ["Pocket Tutor", optionsOnOff],
  ["Better Evolutions", optionsBetterEvolution],
  ["Adopt Eggs", optionsOnOff],
  ["Pocket PC", optionsOnOff],
  ["Pocket Heal", optionsOnOff],
  ["Forget HMs", optionsOnOff],
  ["Infinite TMs", optionsOnOff],
  ["Pocket Mart", optionsOnOff],
  ["1$ Items", optionsOnOff],
  ["Pocket Bikes", optionsOnOff],
  ["Auto Blend", optionsOnOff],
  ["Custom Blend", optionsOnOff],
  ["Badge Boost", optionsOnOff_On],
  ["EV Training", optionsEVTraining],
  ["Catch Rate", optionsCatchRate],
  ["Fast Eggs", optionsFastEggs],
  ["Instant Fishing", optionsOnOff],
  ["Always Feebas", optionsOnOff],
  ["Better Safari", optionsOnOff],
  ["No Fleeing Mons", optionsOnOff],
  ["Instant Text", optionsOnOff],
  ["Music", optionsOnOff_On],
] as const satisfies FeaturesList;

type FeatureTitles<
  T extends FeaturesList = typeof features,
  U extends string[] = [],
> = T extends [
  infer R extends FeaturesList[number],
  ...infer Rest extends FeaturesList,
]
  ? FeatureTitles<Rest, [...U, R[0]]>
  : U;

export const featureTitles = features.map(([title]) => title) as FeatureTitles;
