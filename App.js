import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function App() {
  console.log("App executed")

  const buttonClicked=()=>{
    alert("button clicked")
  }
 
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image 
      style={styles.imageStyle}
      source={
        require("./assets/icon.png")
      }
       />
       <Image  
       style={styles.imageStyle}
       source={{
        uri:"https://picsum.photos/200/300",
        }}/>
        <Button 
        style={styles.buttonStyle}
        title='click me' 
        onPress={buttonClicked} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle:{
    height:200,
    width:300
  },
  buttonStyle:{
    backgroundColor:'red'
  }
});
