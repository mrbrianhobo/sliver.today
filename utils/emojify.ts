import { Emoji } from '../interfaces';
import emojiList from './food-emojis';

const regexps = [/(,\s+(and)\s+)/, /([\.,]\s+(Topped With)\s+)/, /(\s+(Topped with)\s+)/];

function transform(menu: string): string[] {
  for (let i = 0; i < regexps.length; i++) {
    menu = menu.replace(regexps[i], ',');
  }

  return menu.split(',').map(el => el.trim());
}

function matchItemToEmoji(item: string): Emoji | null {
  for (const emoji of emojiList) {
    for (const keyword of emoji.keywords) {
      if (item.toLowerCase().includes(keyword.toLowerCase())) {
        const emojiMatch: Emoji = {
          emoji: emoji.emoji,
          ingredient: item,
        }

        return emojiMatch;
      }
    }
  }
  return null;
}

export function emojify(menu: string): Emoji[] {
  const emojis: Emoji[] = [];
  const items = transform(menu);

  for (const item of items) {
    if (emojis.length == 4) break;
    const emoji = matchItemToEmoji(item);
    if (emoji !== null) {
      emojis.push(emoji);
    }
  }
  return emojis;
}
