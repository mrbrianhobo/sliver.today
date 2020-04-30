import * as React from 'react';
import { Flex, Heading } from 'theme-ui';

const NavBar: React.FC = () => {
  return (
    <Flex 
      p={2}
      sx={{
        height: "65px",
        border: "1px solid #DEDEDE",
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