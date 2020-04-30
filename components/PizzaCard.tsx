import * as React from 'react';
import { Card, Text, Heading } from 'theme-ui';
import EmojiGrid from './EmojiGrid';

const PizzaCard: React.FC = () => {
	// const { theme } = useThemeUI();
  return (
		<Card
			p={16}
			sx={{
				width: "290px",
			}}
		>
			<Heading
				sx={{
					fontWeight: 400,
					textAlign: "center"
				}}
			>
				📅 Monday
			</Heading>
			<EmojiGrid />
			<Heading
				as="h4"
				sx={{
					fontWeight: 600,
				}}
			>
				🍕 Today's Pizza
			</Heading>
			<Text
				sx={{
					// fontFamily: `${theme.fonts.body}`
				}}
			>
				Roasted Yukon Gold Potatoes, Baby Spinach Mixed Caramelized Onions, Mozzarella, Aged Sharp Cheddar Cheese, Fresh Herbs, Infused Thyme Garlic Olive Oil.
  		</Text>
		</Card>
	)
}

export default PizzaCard;