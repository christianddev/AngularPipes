export const Color = {
  red: "red",
  black: "black",
  blue: "blue"
} as const;

export interface Hero {
  name: string,
  canFly: boolean,
  color: string
}
