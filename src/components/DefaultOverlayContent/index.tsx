import React from 'react';

import { Container, Heading, Buttons } from './styles';

interface Props {
  label: string
  descripton: string
}

const DefaultOverlayContent: React.FC<Props> = ({
  label, descripton
}) => {
  return (
    <Container>
      <Heading>
        <h1>{ label } </h1>
        <h2>{ descripton }</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
