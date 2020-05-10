import React from 'react';
import { Flex, Heading, useThemeUI, useColorMode } from 'theme-ui';
import { EmojiButton } from './Button';

const NavBar: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  const { theme } = useThemeUI();
  const colorMode: string = useColorMode()[0];
  
  return (
    <Flex 
      sx={{
        height: "65px",
        borderBottom: `1px solid ${theme.colors?.muted}`,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      <Flex
        p={16}
        sx={{
          maxWidth: "720px",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > 
        <Flex
          sx={{
            width: "40px",
          }}
        >
        </Flex>
        <Heading
          sx={{
            fontWeight: 400,
          }}
        >
          🍕 sliver.today
        </Heading>
        <EmojiButton 
          onClick={onClick}
          emoji={colorMode === 'default' ? '☀️' : '🌙'}
        />
      </Flex>
    </Flex>
  )
}

export default NavBar;