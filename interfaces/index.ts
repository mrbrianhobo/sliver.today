export enum Location {
  Telegraph = "Telegraph",
  Shattuck = "Shattuck",
  Broadway = "Broadway",
}

export type Pizza = {
  // day: string
  location: Location
  menu: string
  emojis: Emoji[]
}

export type Locations = {
  telegraph: Pizza
  shattuck: Pizza
  broadway: Pizza
}

export type Emoji = {
  emoji: string,
  ingredient: string,
}

export const Error: Emoji = {
  emoji: '⚠️',
  ingredient: "ERROR: Could not fetch Sliver menu",
}
