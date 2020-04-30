import React from 'react';
import { Flex } from 'theme-ui';

const Footer: React.FC = () => {
  return (
    <Flex
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50px",
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