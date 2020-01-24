import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabItem, TabText } from './styles';

function Tabs({ translateY, maxDrop }) {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, maxDrop],
              outputRange: [0, maxDrop * 0.1],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, maxDrop],
          outputRange: [1, 0.3],
          extrapolate: 'clamp',
        }),
      }}
    >
      <TabsContainer>
        <TabItem>
          <Icon name='person-add' size={24} color='#fff' />
          <TabText>Indicar Amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name='chat-bubble-outline' size={24} color='#fff' />
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-downward' size={24} color='#fff' />
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name='arrow-upward' size={24} color='#fff' />
          <TabText>Transferir</TabText>
        </TabItem>
        <TabItem>
          <Icon name='lock' size={24} color='#fff' />
          <TabText>Bloquear Cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}

export default Tabs;
