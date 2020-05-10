import React from 'react';
import { Card, Text, Heading } from 'theme-ui';
import { Pizza, Error } from '../interfaces';
import { getDate } from '../utils/date';
import EmojiGrid from './EmojiGrid';

const PizzaCard: React.FC<{
	selected: Pizza;
}> = ({ selected }) => {
  return (
		<Card
			p={16}
			sx={{
        backgroundColor: "rgba(255, 255, 255, 0.08)",
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
          color: "secondary",
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
        mb={"4px"}
				sx={{
					fontWeight: 600,
				}}
			>
				🍕 Today's Pizza
			</Heading>
			<Text
        sx={{
          color: "secondary",
        }}
      >
				{selected.emojis.length == 0 ? Error.ingredient : selected.menu }
  		</Text>
		</Card>
	)
}

export default PizzaCard;