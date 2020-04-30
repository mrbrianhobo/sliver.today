import * as React from 'react';
import { Card, Text, Heading } from 'theme-ui';
import EmojiGrid from './EmojiGrid';
import { getDate } from '../utils/getDate';
import { Pizza } from '../interfaces';

const PizzaCard: React.FC<{
	selected: Pizza
}> = ({ selected }) => {
  return (
		<Card
			p={16}
			sx={{
				width: "290px",
				height: "400px",
			}}
		>
			<Heading
				sx={{
					fontWeight: 400,
					textAlign: "center"
				}}
			>
				📅 {getDate()}
			</Heading>
			<EmojiGrid emojis={selected.emojis}/>
			<Heading
				as="h4"
				sx={{
					fontWeight: 600,
				}}
			>
				🍕 Today's Pizza
			</Heading>
			<Text>
				{selected.menu}
  		</Text>
		</Card>
	)
}

export default PizzaCard;