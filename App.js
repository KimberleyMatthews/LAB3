import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const Boxes = ({devices, setCount}) => {

 const [boxescolor, setBoxescolor] = useState ("lightgrey")

  return (
    <View style={styles.boxes}>
    <View style={{backgroundColor: boxescolor, width: 40, height: 40, margin: 15}}/>
    <Text> {devices}</Text>
    <View style={{flexDirection: 'column', backgroundColor: 'whitesmoke', margin: 2}}>
    <View>
    <Button 
    title="on"
    onPress = {() => {setBoxescolor ("green")
    if (boxescolor !== "green") {setCount ((prevCount) => prevCount +1);
    }}}
    />
    </View>
    <View>
    <Button 
    title="off"
    onPress = {() => {setBoxescolor ("red")
    if (boxescolor !== "red") {setCount ((prevCount) => prevCount -1);
    }}}
    />
    </View>
    </View>

    </View>
  );
};

export default function App() {

  const [count, setCount] = useState (0);

  return (
    <View style={styles.overall}> 
      <Header/>
      <Text style={styles.devices}>Rooms</Text>
      <Rooms/>
      <Text style={styles.devices}>Devices</Text>
      <Boxes devices = "Living Room lamp" setCount={setCount}/>
      <Boxes devices = "Heater" setCount={setCount}/>
      <Boxes devices = "TV"setCount={setCount}/>
      <Text style={styles.devices}>Total devices on: {count}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const Header = () => {
  return(
    <View style={styles.header}>
      <Image style={{width: 70, height: 70}}
      source={require('./assets/house.png')}
      />
      <Text style={styles.text1}>SmartHome</Text>
    </View>
  );
};

const Rooms = () => {
  return (
    <View style={styles.rooms}>
        <Image style={styles.image}
        source={require('./assets/living-room.png')}
        />
        <Image style={styles.image}
        source={require('./assets/bed.png')}
        />
        <Image style={styles.image}
        source={require('./assets/kitchen.png')}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  overall: {
    marginTop: 80,
    marginLeft: 10,

  },
  header: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    
  },
  text1: {
    marginTop: 25,
    color: '#50c878',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  rooms: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    
  },
  image: {
    backgroundColor: '#aaf0d1',
    width: 80,
    height: 80,

  },
  
  text2: {
    marginTop: 10,
    margin: 12,
    flexWrap: "wrap",
    fontWeight: 'bold',
    fontSize: 20,
  },

  devices: {
    marginTop: 10,
    margin: 12,
    flexDirection: 'column',
    flexWrap: "wrap",
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  boxes: {
    flexDirection: 'row',
    width: '90%',
    height: '14%',
    backgroundColor: 'lightyellow',
    justifyContent: 'space-between',
    margin: 10,

  },
 

});
