import React from 'react';

import Hello from '@/components/Hello';
import Notification from '@/utils/notification';

import { StyledContainer } from './styles';

function Home() {
  Notification.success('Hello, dev! How are you?');
  return (
    <StyledContainer>
      <Hello />
    </StyledContainer>
  );
}

export default Home;
