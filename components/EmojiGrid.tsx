import * as React from 'react';
import { Flex } from "theme-ui";

type EmojiProps = {
  emojis?: string[]
}

const EmojiGrid: React.FC<EmojiProps> = () => {
  return (
    <Flex 
      p={1}
      sx={{
        justifyContent: "center"
      }}
    >
      <Flex>🍅</Flex>
      <Flex>🍅</Flex>
      <Flex>🍅</Flex>
      <Flex>🍅</Flex>
    </Flex>
  )
}


  
export default EmojiGrid;