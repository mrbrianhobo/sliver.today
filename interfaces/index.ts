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

export const Error = {
  emoji: '⚠️',
  ingredient: "ERROR: Could not fetch Sliver menu",
  menu: `Hey, it looks like we couldn't fetch the pizza from Sliver Pizzeria's website. 😓\n
         Please try checking their website to see if they are open today? 🤷`
}

export const Queries = {
  default: 'GET https://api.sliver.today',
  telegraph: 'GET https://api.sliver.today/?location=telegraph',
  shattuck: 'GET https://api.sliver.today/?location=shattuck',
  broadway: 'GET https://api.sliver.today/?location=broadway',
  all: 'GET https://api.sliver.today/?location=all',
}

export type Responses = {
  default: string,
  telegraph: string,
  shattuck: string,
  broadway: string,
  all: string,
}
