import React from 'react' ;
import Login from './src/components/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home' ;
import { createStackNavigator } from '@react-navigation/stack';

const Stack  = createStackNavigator();
function MyStack(){
  return(
  
    <Stack.Navigator  screenOptions={{
      headerShown: false }} >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen 
       name="Home" 
       component={Home} 
      
      />
       </Stack.Navigator>
     
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>) }
export default App ; 