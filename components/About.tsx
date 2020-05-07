import React from 'react';
import { Box } from 'theme-ui';
import AboutMDX from './mdx/about.mdx';

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