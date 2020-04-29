// import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';
import { Pizza, Locations } from '../interfaces';
import { emojify } from '../utils/emojify';
import NavBar from '../components/NavBar';
import PizzaCard from '../components/PizzaCard';
import { Flex } from 'theme-ui';

type Props = {
  pizzas: Locations
}

const IndexPage: NextPage<Props> = ({ pizzas }) => {
  {console.log(pizzas)}
  return (
    <div>
      <NavBar />
      <Flex
        p={16}
        sx={{
          justifyContent: 'center'
        }}
      >
        <PizzaCard />
      </Flex>
      {/* <div>Pizzas: {JSON.stringify(pizzas)}</div> */}
    </div>
  )
}

IndexPage.getInitialProps = async () => {
  // const res = await fetch('https://api.sliver.today/');
  // const json = await res.json();

  const json = JSON.parse(`{"pizzas":[{"location":"telegraph","date":"2020-04-29","pizza":"Wild Mushrooms (Shitake, Chanterelle, Portabella, Cremini Mushrooms), Mozzarella, Asiago Fresh, Green Scallons, Fresh Herbs, Infused Chanterelle Mushrooms, and Garlic Olive Oil."},{"location":"shattuck","date":"2020-04-29","pizza":"Roasted Yukon Gold Potatoes, Baby Spinach Mixed Caramelized Onions, Mozzarella, Aged Sharp Cheddar Cheese, Fresh Herbs, Infused Thyme Garlic Olive Oil."},{"location":"broadway","date":"2020-04-29","pizza":"Assorted Organic heirloom Tomatoes, Cremini Mushrooms, Mozzarella, French Feta Cheese. Topped With Avocado Spread"}]}`);

  const telegraphMenu = json.pizzas[0].pizza;
  const shattuckMenu = json.pizzas[1].pizza;
  const broadwayMenu = json.pizzas[2].pizza;

  const telegraph: Pizza = {
    menu: telegraphMenu,
    emojis: emojify(telegraphMenu),
  }

  const shattuck: Pizza = {
    menu: shattuckMenu,
    emojis: emojify(shattuckMenu),
  }

  const broadway: Pizza = {
    menu: broadwayMenu,
    emojis: emojify(broadwayMenu)
  }

  const pizzas: Locations = {
    telegraph: telegraph,
    shattuck: shattuck,
    broadway: broadway,
  }

  return { pizzas: pizzas }
}

export default IndexPage;
