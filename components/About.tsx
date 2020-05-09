import React from 'react';
import { Box } from 'theme-ui';
import AboutMDX from './mdx/about.mdx';

const About: React.FC<{
  onChange: (query: string) => void;
  request: string;
  response: string;
}> = ({ onChange, request, response }) => {
  return (
    <Box 
      mb={"80px"}
      p={16}
      sx={{
        maxWidth: "720px",
        minWidth: "360px",
        width: "90vw",
      }}
    >
      <AboutMDX
        onChange={onChange}
        request={request} 
        response={response} 
      />
    </Box>
  )
}

export default About;