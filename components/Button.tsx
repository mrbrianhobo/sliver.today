import * as React from 'react';
import { Button as ThemeButton } from 'theme-ui'

const Button: React.FC = () => {
  return (
    <ThemeButton
      m={"8px"}
      sx={{
        fontFamily: "Inconsolata",
        fontWeight: 600,
      }}
    >
      Telegraph
    </ThemeButton>
  )
}

export default Button;