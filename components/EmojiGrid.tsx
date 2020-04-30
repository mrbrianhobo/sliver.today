import * as React from 'react';
import { Flex, Text } from "theme-ui";

type EmojiProps = {
  emojis?: string[]
}

const EmojiBox: React.FC = () => {
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
      <Text
        sx={{
          fontSize: "30px"
        }}
      >
        🍅
      </Text>
    </Flex>
  )
}

const EmojiGrid: React.FC<EmojiProps> = () => {
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
        <EmojiBox />
        <EmojiBox />
      </Flex>
      <Flex>
        <EmojiBox />
        <EmojiBox />
      </Flex>
      
    </Flex>
  )
}
  
export default EmojiGrid;