import React from 'react';
import { Button as ThemeButton } from 'theme-ui'
import { motion } from 'framer-motion';

export const EmojiButton: React.FC<{
  onClick: any;
  emoji: string;
}> = ({ onClick, emoji }) => {
  return (
      <ThemeButton
        onClick={() => onClick()}
        variant={"secondary"}
        sx={{
          padding: "0 0.5rem",
          height: "40px",
          width: "40px",
          fontSize: "16pt",
          outline: 0,
        }}
      > 
        <motion.div
          whileTap={{ scale: 0.75 }}
        >
          {emoji}
        </motion.div>
      </ThemeButton>
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