import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
        <View>
            <Image
          style={{ borderColor: '#663366', alignSelf:'center'}}
          source={{uri: 'https://media.9curry.com/uploads/organization/image/2014/nmmc-logo.png'}}
          height={this.props.ht}
          width={this.props.wdth}
          margin={this.props.mrg}
          borderWidth={this.props.bwdth}
          borderRadius={this.props.bradius}
        />
        </View>
    );
  }
}