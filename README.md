# 🍕 sliver.today

## ℹ️ About

[api.sliver.today](http://api.sliver.today) is a free REST API for retrieving [Sliver Pizzeria](https://www.sliverpizzeria.com)'s pizza of the day. 

## 👀 Demo

➡️ **[sliver.today](http://sliver.today)**

## 🚀 Getting Started

### Try it out!

```bash
# install dependencies and start development server
$ yarn && yarn dev
yarn install v1.22.0
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.35s.
yarn run v1.22.0
$ next
[ wait ]  starting the development server ...
[ info ]  waiting on http://localhost:3000 ...
[ info ]  bundled successfully, waiting for typecheck results...
[ ready ] compiled successfully - ready on http://localhost:3000
```

Now you can visit [http://localhost:3000](http://localhost:3000) and try out the frontend app!

### Deploy your own!

Deploy your own project with [Vercel](https://vercel.com/home).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/mrbrianhobo/sliver.today)


## ⚙️ Usage

### Request

Retrieves a list of pizza menu objects.

```jsx
GET https://api.sliver.today
```

### Response

```json
{
  "pizzas": [
    {
      "location": "telegraph",
      "date": "2020-05-06",
      "pizza": "Corn, Roasted Yukon Gold Potatoes, Baby Spinach Mixed with Caramelized Onions, Mozzarella, French Feta Cheese, with Avocado Spread."
    },
    {
      "location": "shattuck",
      "date": "2020-05-06",
      "pizza": "Wild Mushrooms (Shitake, Chanterelle, Portabella, Cremini Mushrooms), Mozzarella, Asiago Fresh, Green Scallons, Fresh Herbs, Infused Chanterelle Mushrooms, and Garlic Olive Oil."
    },
    {
      "location": "broadway",
      "date": "2020-05-06",
      "pizza": "Roasted Yukon Gold Potatoes, Baby Heirloom Tomatoes, Baby Spinach Mixed with Caramelized Onions, Mozzarella, Pecorino Cheese mixed with Fresh Herbs, and Infused Sage Garlic Oil."
    }
  ]
}
```

### Query Parameters

`location?: string`

The location of the wanted pizza menu. Defaults to `all`. Supports `telegraph`, `shattuck`, `broadway` as parameters.

## 🤔 FAQ

**Can I use this in my project?**

Yup! Do whatever you want with it! Let me know if you're thinking of making something cool with it! 😎

**Is it open source? Can I contribute?**

Yes! Checkout my spaghetti code on Github and submit issues or bugs. 🤖[API](https://github.com/mrbrianhobo/api.sliver.today) 👨‍💻[Site](https://github.com/mrbrianhobo/sliver.today)

**What else do you want to do with this?** 

I'm thinking about making this into a Slackbot/Discord Bot/Twitter Bot. It would also be pretty cool to index all the past pizzas that Sliver has served. 

**What did you use to make this?**

Backend API: Golang + [Colly](http://go-colly.org) (🚀deployed on [Google Cloud Run](https://cloud.google.com/run))  
Frontend: Typescript + [Next.js](https://nextjs.org) + [MDX](https://mdxjs.com) (🎨styled with [Theme-UI](https://theme-ui.com) + [Emotion](https://emotion.sh))

**Why did you make this?**

IDK. I really like Sliver. And I was bored. Really bored. 😴

## 📝 License

MIT Licensed.
