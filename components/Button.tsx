import React from 'react';
import { Button as ThemeButton } from 'theme-ui'
import { motion } from 'framer-motion';

// const noop = (): void => {console.log("clicked")};

const Button: React.FC<{
  onClick: any;
  location: string;
}> = ({ onClick, location }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      <ThemeButton
        onClick={() => onClick(location)}
        m={"8px"}
        sx={{
          fontFamily: "Inconsolata",
          fontWeight: 600,
          outline: 0,
        }}
      >
        {location}
      </ThemeButton>
    </motion.div>
  )
}

export default Button;