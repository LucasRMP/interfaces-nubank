import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native';

export const Container = styled(Animated.ScrollView).attrs({
  contentContainerStyle: { alignItems: 'center' },
  showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  padding: 10px;
`;

export const QRCode = styled.Image`
  width: 72px;
  height: 72px;
`;

export const Nav = styled.View`
  align-self: stretch;
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
  color: #fff;
  margin-left: 15px;
  font-size: 15px;
`;

export const Span = styled.View`
  height: 40px;
`;

export const SignOutButton = styled.TouchableOpacity`
  width: 100%;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
