import React from 'react';
import { Flex, Text } from "theme-ui";
import { motion } from "framer-motion";
import { Emoji } from '../interfaces';

type EmojiProps = {
  emojis: Emoji[]
}

const EmojiBox: React.FC<{
  emoji: Emoji
}> = ({ emoji }) => {
  return (
    <Flex
      m={"4px"}
      sx={{
        height: "80px",
        width: "80px",
        background: "#F3F3F3",
        borderRadius: "24px",
        justifyContent: "center",
        alignItems: "center"
      }} 
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Text
          sx={{
            fontSize: "30px",
            cursor: "pointer"
          }}
        >
          {emoji.emoji}
        </Text>
      </motion.div>
    </Flex>
  )
}

const EmojiGrid: React.FC<EmojiProps> = ({ emojis }) => {
  return (
    <Flex 
      p={16}
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    > 
      <Flex>
        <EmojiBox emoji={emojis[0]} />
        <EmojiBox emoji={emojis[1]} />
      </Flex>
      <Flex>
        <EmojiBox emoji={emojis[2]} />
        <EmojiBox emoji={emojis[3]} />
      </Flex>
      
    </Flex>
  )
}
  
export default EmojiGrid;