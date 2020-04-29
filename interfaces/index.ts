export type Pizza = {
  // day: string
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
