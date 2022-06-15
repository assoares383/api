import React, { memo } from 'react';
import { Header } from '@buffetjs/custom'
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Header 
        title={{ label: "restaurant de paris"}} 
        content="Restaurant description" 
      />
    </Wrapper>
  );
};

export default memo(HomePage);
