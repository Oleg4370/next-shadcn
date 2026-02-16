export const RANK = {
  cadet: "Cadet",
  officer: "Officer",
  sergeant: "Sergeant",
  captain: "Captain",
} as const;

export type RankType = (typeof RANK)[keyof typeof RANK];

// export const POSITION = {
//   driver_electric: "Водій-електрик",
//   medic: "Санітар-стрілець",
//   commander: "Командир відділення",
// } as const;

// export type PositionType = (typeof POSITION)[keyof typeof POSITION];
