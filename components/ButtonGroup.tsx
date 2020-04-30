import React from 'react';
import { Flex } from 'theme-ui'
import { Location } from '../interfaces';
import Button from "./Button";

const ButtonGroup: React.FC<{
  onClick: (location: string) => void;
}> = ({ onClick }) => {
  return (
    <Flex
    >
      <Button onClick={onClick} location={Location.Shattuck} />
      <Button onClick={onClick} location={Location.Telegraph}/>
      <Button onClick={onClick} location={Location.Broadway} />
    </Flex>
  )
}

export default ButtonGroup;