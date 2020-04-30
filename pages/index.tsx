// import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { NextPage } from 'next';
import { Flex } from 'theme-ui';
import { Pizza, Locations, Location } from '../interfaces';
import { emojify } from '../utils/emojify';
import NavBar from '../components/NavBar';
import PizzaCard from '../components/PizzaCard';
import ButtonGroup from '../components/ButtonGroup';
import Footer from '../components/Footer';

type Props = {
  pizzas: Locations
}

const IndexPage: NextPage<Props> = ({ pizzas }) => {
  const [pizza, setPizza] = useState(pizzas.telegraph);

  const updatePizza = (location: string) => {
    switch (location) {
      case Location.Telegraph:
        setPizza(pizzas.telegraph);
        break;
      case Location.Shattuck:
        setPizza(pizzas.shattuck);
        break;
      case Location.Broadway:
        setPizza(pizzas.broadway);
    }
  }

  return (
    <div>
      <NavBar />
      <Flex
        m={16}
        p={16}
        sx={{
          justifyContent: 'center'
        }}
      >
        <PizzaCard selected={pizza} />
      </Flex>
      <Flex
        sx={{
          justifyContent: 'center'
        }}
      >
        <ButtonGroup 
          onClick={location => updatePizza(location)}
        />
      </Flex>
      <Footer />
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
    location: Location.Telegraph,
    menu: telegraphMenu,
    emojis: emojify(telegraphMenu),
  }

  const shattuck: Pizza = {
    location: Location.Shattuck,
    menu: shattuckMenu,
    emojis: emojify(shattuckMenu),
  }

  const broadway: Pizza = {
    location: Location.Broadway,
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
