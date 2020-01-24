import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  QRCode,
  Nav,
  NavText,
  NavItem,
  Span,
  SignOutButton,
  ButtonText,
} from './styles';
import qrcode from '../../assets/QRCode.png';

function Menu({ translateY, maxDrop }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, maxDrop * 0.8],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <QRCode source={qrcode} />
      </Code>

      <Nav>
        <NavItem>
          <Icon name='help-outline' size={20} color='#fff' />
          <NavText>Me ajuda!</NavText>
        </NavItem>
        <NavItem>
          <Icon name='person-outline' size={20} color='#fff' />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name='credit-card' size={20} color='#fff' />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name='smartphone' size={20} color='#fff' />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <ButtonText>Sair do app</ButtonText>
      </SignOutButton>
      <Span />
    </Container>
  );
}

export default Menu;
