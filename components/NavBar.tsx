import * as React from 'react';
import { Flex, Heading } from 'theme-ui';

const NavBar: React.FC = () => {
  return (
    <Flex 
      p={2}
      sx={{
        justifyContent: "center"
      }}
    >
      <Heading>
        sliver.today
      </Heading>
    </Flex>
  )
}


export default NavBar;