import * as React from 'react';
import { Card, Text, Heading } from 'theme-ui';
import EmojiGrid from './EmojiGrid';

const PizzaCard: React.FC = () => {
  return (
		<Card
			sx={{
				width: "290px",
			}}
		>
			<Heading
				sx={{
					textAlign: 'center'
				}}
			>
				📅 Monday
			</Heading>
			<EmojiGrid />
			<Heading
				as='h3'
			>
				🍕 Today's Pizza
			</Heading>
			<Text>
				Roasted Yukon Gold Potatoes, Baby Spinach Mixed Caramelized Onions, Mozzarella, Aged Sharp Cheddar Cheese, Fresh Herbs, Infused Thyme Garlic Olive Oil.
  		</Text>
		</Card>
	)
}

export default PizzaCard;