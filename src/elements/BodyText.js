import React from 'react';
import { Stylesheet, View, Text } from 'react-native';

class BodyText extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = Stylesheet.create({
  text: {
    color: '#DDD',
    backgroundColor: '#EEE',
  },
});


export default BodyText;
