import React from 'react';
import AboutMDX from './mdx/about.mdx';
import { Box } from 'theme-ui';

const About: React.FC = () => {
  return (
    <Box 
      mb={"80px"}
      p={16}
      sx={{
        maxWidth: "720px",
        minWidth: "360px",
        width: "80vw",
      }}
    >
      <AboutMDX />
    </Box>
  )
}

export default About;