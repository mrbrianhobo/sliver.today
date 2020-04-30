import React from 'react';
import { Flex } from 'theme-ui';

const Footer: React.FC = () => {
  return (
    <Flex
      sx={{
        justifyContent: "center",
      }}
    >
      <footer>
        made in quarantine by brian ho 😷
      </footer>
    </Flex>
    
  )
}

export default Footer;