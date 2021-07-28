import * as React from 'react';
import {Text, View , StyleSheet } from 'react-native';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

 const Home = () => {
  return (
    <View>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map}
    region={{
      latitude: 34.3440299,
      longitude: 9.7179306,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
   

     
   
  );
};
const styles = StyleSheet.create({ 
  map : {
    height: hp('100%'),
    width: hp('100%'),
  }
})
export default Home ;