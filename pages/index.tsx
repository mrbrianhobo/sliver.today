import fetch from 'isomorphic-unfetch';
import { useState } from 'react';
import { NextPage } from 'next';
import { Flex, useColorMode } from 'theme-ui';
import { Pizza, Locations, Location, Queries, Responses } from '../interfaces';
import { emojify } from '../utils/emojify';
import { parseJSON } from '../utils/parse';
import NavBar from '../components/NavBar';
import PizzaCard from '../components/PizzaCard';
import ButtonGroup from '../components/ButtonGroup';
import About from '../components/About';
import Footer from '../components/Footer';

type Props = {
  pizzas: Locations
  results: Responses
}

const IndexPage: NextPage<Props> = ({ pizzas, results }) => {
  const [colorMode, setColorMode] = useColorMode();
  const [pizza, setPizza] = useState(pizzas.telegraph);
  const [request, setRequest] = useState(Queries.default);
  const [response, setResponse] = useState(results.default);

  const toggleMode = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default');
  }

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

  const updateQuery = (query: string) => {
    switch (query) {
      case Queries.default:
        setRequest(Queries.default);
        setResponse(results.default);
        break;
      case Queries.telegraph:
        setRequest(Queries.telegraph);
        setResponse(results.telegraph);
        break;
      case Queries.shattuck:
        setRequest(Queries.shattuck);
        setResponse(results.shattuck);
        break;
      case Queries.broadway:
        setRequest(Queries.broadway);
        setResponse(results.broadway);
        break;
      case Queries.all:
        setRequest(Queries.all);
        setResponse(results.all);
    }
  }

  return (
    <div>
      <NavBar onClick={() => toggleMode()} />
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
          selected={pizza}
        />
      </Flex>
      <Flex
        sx={{
          justifyContent: 'center'
        }}
      >
        <About
          onChange={query => updateQuery(query)}
          request={request} 
          response={response} 
        />
      </Flex>
      <Footer />
    </div>
  )
}

IndexPage.getInitialProps = async () => {
  const res = await fetch('https://api.sliver.today/');
  const json = await res.json();
  const results = parseJSON(json);

  // const json = JSON.parse(`{"pizzas":[{"location":"telegraph","date":"2020-05-04","pizza":"Roma Tomatoes, Cremini Mushrooms, Mozzarella, French Feta Cheese. "},{"location":"shattuck","date":"2020-05-04","pizza":"Roasted Yukon Gold Potatoes."},{"location":"broadway","date":"2020-05-04","pizza":""}]}`);

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

  return { pizzas: pizzas, results: results }
}

export default IndexPage;
