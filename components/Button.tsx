import React from 'react';
import { Button as ThemeButton, Flex, Text } from 'theme-ui'
import { motion } from 'framer-motion';

export const EmojiButton: React.FC<{
  onClick: any;
  emoji: string;
}> = ({ onClick, emoji }) => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "40px",
        width: "40px",
      }}
    > 
      <ThemeButton
        onClick={() => onClick()}
        variant={"secondary"}
        p={0}
        sx={{
          width: "100%",
          height: "100%",
          outline: 0,
          cursor: "pointer",
        }}
      >
        <motion.div
          whileTap={{ scale: 0.75 }}
        >
          <Text
            sx={{
              fontSize: "16pt",
            }}
          >
            {emoji}
          </Text>
        </motion.div>
      </ThemeButton>
    </Flex>
  )
}

const Button: React.FC<{
  onClick: any;
  location: string;
  active: string;
}> = ({ onClick, location, active}) => {
  const isActive = location === active;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ThemeButton
        onClick={() => onClick(location)}
        variant={isActive ? "active" : "primary"}
        m={"8px"}
        sx={{
          fontFamily: "Inconsolata",
          fontWeight: 600,
          outline: 0,
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {location}
      </ThemeButton>
    </motion.div>
  )
}

export default Button;