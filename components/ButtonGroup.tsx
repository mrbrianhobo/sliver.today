import * as React from 'react';
import { Flex } from 'theme-ui'
import Button from "./Button";

const ButtonGroup: React.FC = () => {
  return (
    <Flex
    >
      <Button />
      <Button />
      <Button />
    </Flex>
  )
}

export default ButtonGroup;