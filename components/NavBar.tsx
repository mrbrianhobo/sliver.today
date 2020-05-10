import React from 'react';
import { Flex, Heading, useThemeUI } from 'theme-ui';

const NavBar: React.FC = () => {
  const { theme } = useThemeUI();
  return (
    <Flex 
      p={2}
      sx={{
        height: "65px",
        borderBottom: `1px solid ${theme.colors?.muted}`,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Heading
        sx={{
          fontWeight: 400,
        }}
      >
        🍕 sliver.today
      </Heading>
    </Flex>
  )
}

export default NavBar;