import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';

import {Container, Logo, Button, TextButton} from '../styles/stylePages/InicioStyles';

const Inicio: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigation(params: string){
    if (params === 'Cadastro'){
      navigation.navigate('Cadastro');
    } else {
      navigation.navigate('Login');
    }
  }


  return (
    <Container>

      <Logo source={require('../../assets/icone.png')} />

      <Button onPress={() => {handleNavigation('Cadastro')}}><TextButton>Cadastrar-se</TextButton></Button>
      <Button onPress={() => {handleNavigation('Login')}}><TextButton>Entrar</TextButton></Button>

    </Container>
  );
}

export default Inicio;