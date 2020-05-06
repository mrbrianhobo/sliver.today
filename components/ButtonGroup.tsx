import React from 'react';
import { Flex } from 'theme-ui'
import { Location, Pizza } from '../interfaces';
import Button from "./Button";

const ButtonGroup: React.FC<{
  onClick: (location: string) => void;
  selected: Pizza;
}> = ({ onClick, selected }) => {
  return (
    <Flex
    >
      <Button onClick={onClick} location={Location.Shattuck} active={selected.location} />
      <Button onClick={onClick} location={Location.Telegraph} active={selected.location} />
      <Button onClick={onClick} location={Location.Broadway} active={selected.location} />
    </Flex>
  )
}

export default ButtonGroup;