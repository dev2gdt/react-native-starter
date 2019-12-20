import React from 'react';
import { View, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';


import { Button, Block, Text, Input } from '../../components/';
import { BgGeoConfig } from '../../config/';
import { Theme, AppCons } from '../../constants/';
import { Device } from '../../utils/';


const STORAGE_KEY:string = "@pushapp:";

class MapSettings extends React.Component {

  static navigationOptions = {
    title: 'MapSettings',
  }

  constructor(props) {
    super(props);
    this.state = {
        desiredAccuracy: "0",
        distanceFilter: "50",
        elasticityMultiplier: "5",
        desiredOdometerAccuracy: "10",
        locationUpdateInterval: "1000",
        fastestLocationUpdateInterval: "0",
        url: AppCons.locationUrl,
    }
  }

  onInputChange(key,val,type){
    // type = 0->string, 1->int
    this.setState({
      [key]: val
    });
    let config = {...BgGeoConfig};
    switch(type){
      case 1:
        config[key] = parseInt(val);
      break;
      default:
        config[key] = val;
      break;
    }
    AsyncStorage.setItem(STORAGE_KEY+"BgGeoConfig", JSON.stringify(config));
  }

  render () {

    const { navigation } = this.props

    return (
      <ScrollView style={styles.container}>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text h3>Map</Text>
            </Block>
          </Block>
         <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>desiredAccuracy</Text>
              <Text>-2, -1, 0, 10, 100, 1000</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.desiredAccuracy}
                  onChangeText={value => {this.onInputChange("desiredAccuracy", value, 1);}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>distanceFilter</Text>
              <Text>0, 10, 20, 50, 100, 500</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.distanceFilter}
                  onChangeText={value => {this.onInputChange("distanceFilter", value, 1 );}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>elasticityMultiplier</Text>
              <Text>0, 1, 2, 3, 5, 10</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.elasticityMultiplier}
                  onChangeText={value => {this.onInputChange("elasticityMultiplier", value, 1);}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>desiredOdometerAccuracy</Text>
              <Text>10, 20, 50, 100, 500</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.desiredOdometerAccuracy}
                  onChangeText={value => {this.onInputChange("desiredOdometerAccuracy", value, 1);}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>locationUpdateInterval</Text>
              <Text>0, 1000, 5000, 10000, 30000, 60000</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.locationUpdateInterval}
                  onChangeText={value => {this.onInputChange("locationUpdateInterval", value, 1);}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Text>fastestLocationUpdateInterval</Text>
              <Text>0, 1000, 5000, 10000, 30000, 60000</Text>
            </Block>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.fastestLocationUpdateInterval}
                  onChangeText={value => {this.onInputChange("fastestLocationUpdateInterval", value, 1);}}
                />
            </Block>
          </Block>
          <Block row padding={[0,Theme.sizes.indent]}>
            <Block>
              <Input
                  textColor={Theme.colors.black}
                  borderColor={Theme.colors.black}
                  activeBorderColor={Theme.colors.black}
                  returnKeyType={"next"}
                  value={this.state.url}
                  onChangeText={value => {this.onInputChange("url", value, 0);}}
                />
            </Block>
          </Block>
       </ScrollView>
    )
    }
}

const styles = StyleSheet.create({
  container: {
   height: Device.winHeight,
   width: Device.winWidth,
 },

})

export default connect()(MapSettings)