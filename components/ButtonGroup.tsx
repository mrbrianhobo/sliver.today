import React from 'react';
import { Flex } from 'theme-ui'
import Button from "./Button";
// import { Pizza } from '../interfaces';

const ButtonGroup: React.FC<{
  onClick: (location: string) => void;
}> = ({ onClick }) => {
  return (
    <Flex
    >
      <Button onClick={onClick} location="Shattuck" />
      <Button onClick={onClick} location="Telegraph"/>
      <Button onClick={onClick} location="Broadway" />
    </Flex>
  )
}

export default ButtonGroup;