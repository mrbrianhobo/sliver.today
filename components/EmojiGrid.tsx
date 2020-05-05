import React from 'react';
import { Flex, Text } from "theme-ui";
import { motion } from "framer-motion";
import { Error, Emoji } from '../interfaces';

type EmojiProps = {
  emojis: Emoji[]
}

const EmojiBox: React.FC<{
  emoji?: Emoji;
  isSingle?: boolean;
}> = ({ emoji, isSingle }) => {
  return (
    <Flex
      m={"4px"}
      sx={{
        height: isSingle ? "120px" : "80px",
        width: isSingle ? "120px" : "80px",
        background: "#F3F3F3",
        borderRadius: "24px",
        justifyContent: "center",
        alignItems: "center",
        visibility: emoji !== undefined ? "visible" : "hidden",
      }} 
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
      >
        <Text
          sx={{
            fontSize: isSingle ? "48px" : "30px",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          {emoji !== undefined ? emoji.emoji : null}
        </Text>
      </motion.div>
    </Flex>
  )
}

const EmojiList: React.FC<EmojiProps> = ({ emojis }) => {
  return (
    <div>
      <Flex>
        <EmojiBox emoji={emojis[0]} />
        <EmojiBox emoji={emojis[1]} />
      </Flex>
      <Flex>
        <EmojiBox emoji={emojis[2]} />
        <EmojiBox emoji={emojis[3]} />
      </Flex>
    </div>
  )
}

const EmojiSingle: React.FC<EmojiProps> = ({ emojis }) => {
  return (
    <Flex
      p={24}
    >
      {emojis.length == 0 
        ? <EmojiBox emoji={Error} isSingle={true} />
        : <EmojiBox emoji={emojis[0]} isSingle={true} />
      }
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
      {emojis.length <= 1 
        ? <EmojiSingle emojis={emojis} /> 
        : <EmojiList emojis={emojis} /> 
      }
    </Flex>
  )
}
  
export default EmojiGrid;