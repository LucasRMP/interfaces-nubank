import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Animated, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Title,
  Balance,
  Annotation,
} from './styles';
// ${Dimensions.get('screen').height * 0.45}px
function Main() {
  const maxDrop = Dimensions.get('screen').height * 0.45;

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;
      if (translationY >= maxDrop * 0.4) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? maxDrop : 0,
        duration: 250,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? maxDrop : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY} maxDrop={maxDrop} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-1 * maxDrop, 0, maxDrop * 0.8],
                    outputRange: [-0.13 * maxDrop, 0, maxDrop],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <CardHeader>
              <Icon name='attach-money' size={28} color='#666' />
              <Icon name='visibility-off' size={28} color='#666' />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Balance>R$ 786.248,94</Balance>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 24.000,00 recebida de Matheus hoje as 15:32h
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} maxDrop={maxDrop} />
    </Container>
  );
}

export default Main;
