import React from 'react' ;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {View , Text , StyleSheet , Image ,TextInput } from 'react-native';
import { Input } from 'react-native-elements';

const Login = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1}}> 
    <View style={styles.container}>
    
      <Text style={styles.baseText}>Bienvenue</Text>
      <Text style={styles.text}>sécurisez et tracer efficacement</Text>
      
     <Image
       source={require('./assets/Logo.png')
       }
       style={{
        marginTop: 20,
        alignSelf: 'center',
         width: hp('40%'),
         height: wp('54%'),
         //Below lines will help to set the border radius
         borderBottomLeftRadius: 30,
         borderBottomRightRadius: 15,
         borderTopRightRadius: 30,
         borderTopLeftRadius: 15,
         overflow: 'hidden',
       }}
     />
  
  </View>
  <View style={styles.inputStyle}>
    <Icon
        style={styles.icon}
          name='user'
          size={20}
          color='#bbbbbb'
        />
     <TextInput
    style={{borderBottomWidth:0}}
      placeholder="Nom d'Utilisateur/ Email"
      
        />
         </View>
    <View style={styles.inputStyle}>
    <Icon
        style={styles.icon}
          name='lock'
          size={20}
          color='#bbbbbb'
        />
     <TextInput
    style={{borderBottomWidth:0}}
      placeholder='Mot de Passe'
      
        />
         </View>
  
   </View>
  ) 
}
const styles = StyleSheet.create({
  container: {
    alignSelf: 'center' ,
    marginTop: hp('5%'),
    paddingBottom :20,
    borderBottomWidth : 1, 
    borderColor :'#e2e2e2'
   
  },
  
  baseText: {
    alignSelf: 'center' ,
    fontWeight: 'bold',
    fontSize: hp('4%') ,
  },
  text: {
    alignSelf: 'center' ,
    color: '#949494' ,
  
    fontSize: hp('2.5%')
  },
  inputStyle: {
    flexDirection: 'row',
    alignSelf: 'center' ,
    height: hp('7%'),
     width: hp('40%'),
      borderColor: '#e2e2e2', 
      borderRadius :100 ,
      borderWidth:1, 
       marginTop: hp('4%') ,
     
    
  },
  icon:{
    paddingTop : hp('1.5%') ,
    padding:hp('1%') , 
    borderRightWidth :2 ,
    borderRightColor :'#bbbbbb' 

  }
  
 
});


export default Login ; 