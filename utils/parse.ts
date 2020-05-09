import { Location, Responses } from '../interfaces';

type Pizzas = {
	pizzas: any[]
}

export const parseJSON = (menu: any) => {
	const pizzaList: any[] = menu.pizzas;

	const telegraph: Pizzas = {
		pizzas: pizzaList.filter(pizza => pizza.location === Location.Telegraph.toLowerCase())
	};
	const shattuck: Pizzas = {
		pizzas: pizzaList.filter(pizza => pizza.location === Location.Shattuck.toLowerCase())
	};
	const broadway: Pizzas = {
		pizzas: pizzaList.filter(pizza => pizza.location === Location.Broadway.toLowerCase())
	};

	const results: Responses = {
		default: JSON.stringify(menu, undefined, 2),
		telegraph: JSON.stringify(telegraph, undefined, 2),
		shattuck: JSON.stringify(shattuck, undefined, 2),
		broadway: JSON.stringify(broadway, undefined, 2),
		all: JSON.stringify(menu, undefined, 2)
	};

	return results;
}
