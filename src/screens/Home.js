import React, { useRef, Component } from 'react';
import { Animated,findNodeHandle, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-ionicons';
import Header from '../components/Header'
import Card from '../components/Card'
import CardWithoutBackground from '../components/CardWithoutBackground'
import Config from '../config'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {Colors,Dialog, Badge,FeatureHighlight, Button} from 'react-native-ui-lib';

//export default function Home() {
  export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: true,
      showFTE: true,
      isRounded: true,
      showDialog: false,
      currentTargetIndex: 0
    };
    this.targets = {};
  }
  addTarget(ref, id) {
    if (ref && !this.targets[id]) {
      this.targets[id] = ref;
    }
  }
  showDialog = () => {
    this.setState({showDialog: true});
  };

  hideDialog = () => {
    this.setState({showDialog: false});
  };

  closeHighlight = () => {
    this.setState({showFTE: false}, () => {
      if (this.viewRef) {
        const reactTag = findNodeHandle(this.viewRef);
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    });
  }

  render() {
  return (
    <>
    <Header navigation={this.props.navigation}/>
    <View style={{ flex: 1, backgroundColor: '#fafafa', }}> 
      <CardWithoutBackground>
      <CountdownCircleTimer
        isPlaying
        duration={5}
        size={120}
        strokeWidth={7}
        colors={[['#4CAF50', 0.33], ['#8BC34A', 0.33], ['#FF5252']]}>
        {({ remainingTime, animatedColor }) => (
          <View testID={'0'} ref={r => (this.addTarget(r, '0'))} >
            <Animated.Text style={{ color: animatedColor }}>
              {remainingTime} h
            </Animated.Text>
          </View>
        )}
      </CountdownCircleTimer>
      </CardWithoutBackground>
      <Card>
      <Badge label={'1'} backgroundColor={'#000'}/>
        <Text> Texto dentro de card</Text>
      </Card>
      <FeatureHighlight
        visible={this.state.showFTE}
        title={'Título'}
        message={'Ejemplo de descripción'}
        getTarget={() => this.targets[0]}
        confirmButtonProps={{label: 'Cerrar', onPress: this.closeHighlight}}
        onBackgroundPress={this.closeHighlight}
       />
    </View>
    </>
  );

  }
}

const styles = StyleSheet.create({
  dialog: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  }
});
