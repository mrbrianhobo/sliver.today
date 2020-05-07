import React from 'react';
import { Flex } from 'theme-ui';

const Footer: React.FC = () => {
  return (
    <Flex
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "80px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <footer>
        made in quarantine by <a href="http://brianho.io/" target="_blank">Brian Ho</a> 😷
      </footer>
    </Flex>
    
  )
}

export default Footer;