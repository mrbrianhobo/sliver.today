import React from 'react';
import { Button as ThemeButton } from 'theme-ui'
import { motion } from 'framer-motion';

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