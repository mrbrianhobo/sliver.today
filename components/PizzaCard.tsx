import React from 'react';
import { Card, Text, Heading } from 'theme-ui';
import { Pizza } from '../interfaces';
import { getDate } from '../utils/getDate';
import EmojiGrid from './EmojiGrid';

const PizzaCard: React.FC<{
	selected: Pizza
}> = ({ selected }) => {
  return (
		<Card
			p={16}
			sx={{
				width: "290px",
				height: "425px",
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
      <Heading
        as="h4"
        sx={{
          fontFamily: "Inconsolata",
          fontWeight: 400,
          textAlign: "center"
        }}
      >
        {selected.location}
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