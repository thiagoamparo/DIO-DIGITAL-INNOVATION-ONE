import React from 'react';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

import styles from './Styles';

import {

  useState,
  useEffect,
  useCallback,

} from 'react';

import {

  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Text,

} from 'react-native';

const App = () => {

  const PATH_ICONS = './assets/icons/'; 

  const [lighting, setLighting] = useState(false);

  const changeLighting = useCallback(() => setLighting(lighting => !lighting));

  const pathImageBulb = useCallback(() => lighting ? require(PATH_ICONS + 'BulbOn.png') : require(PATH_ICONS + 'BulbOff.png'));

  const ilumination = useCallback(() => lighting ? styles.on : styles.off);

  const bulbIlumination = useCallback(() => lighting ? null : styles.bulb_Off);

  useEffect(() => {Torch.switchState(lighting)}, [lighting]);

  useEffect(() => {

    const shake = RNShake.addListener(() => {setLighting(lighting => !lighting)});

    return () => shake.remove();

  });
  
  const MAIN = (

    <>
      <StatusBar animated={true} hidden={true}/>
      <SafeAreaView style={[styles.container, ilumination()]}>
        <TouchableOpacity onPress={changeLighting}>

          <Image source={pathImageBulb()} style={[styles.bulb, bulbIlumination()]}/>
          <Text style={styles.warning}>SHAKE-ME</Text>

        </TouchableOpacity>
      </SafeAreaView>
    </>

  );

  return MAIN;
};

export default App;