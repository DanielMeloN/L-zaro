import React, {useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

import { Switch } from 'react-native';

import {Button, 
  Container, 
  Input, 
  InputText, 
  Link, Logo, 
  LinkContainer, 
  TextButton
} from '../styles/stylePages/LoginStyles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigation(params: string){
    if (params === 'Cadastro'){
      navigation.navigate('Cadastro');
    } else {
      navigation.navigate('Listagem');
    }
  }


  return(
    <Container>

      <Logo source={require('../../assets/LogoemVetor.png')}
      />

      <InputText>E-mail: </InputText>
      <Input placeholder={'Digite'}></Input>

      <InputText>Senha: </InputText>
      <Input placeholder={'Digite'}></Input>

      <LinkContainer onPress={() => {handleNavigation('Cadastro')}}>
        <Link>Cadastre-se</Link>
      </LinkContainer>

      <Button onPress={() => {handleNavigation('Listagem')}}>
        <TextButton>Entrar</TextButton>
      </Button>
      

    </Container>
  );
}

export default Login;