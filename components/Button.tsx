import * as React from 'react';
import { Button as ThemeButton } from 'theme-ui'

// const noop = (): void => {console.log("clicked")};

const Button: React.FC<{
  onClick: any;
  location: string;
}> = ({ onClick, location }) => {
  return (
    <ThemeButton
      onClick={() => onClick(location)}
      m={"8px"}
      sx={{
        fontFamily: "Inconsolata",
        fontWeight: 600,
      }}
    >
      {location}
    </ThemeButton>
  )
}

export default Button;