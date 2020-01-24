import React from 'react';
import { View } from 'react-native';

import { Container, Logo, Name, Top } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/Nubank_Logo.png';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Name>Lucas</Name>
      </Top>
      <Icon name='keyboard-arrow-down' size={20} color='#fff' />
    </Container>
  );
}

export default Header;
