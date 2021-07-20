import React, {useContext} from 'react';
import {Container, Texto,Input, Textou, Textoo, Botao, LogoMenor } from '../styles/stylePages/CadastroStyles'
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native';

const Cadastro: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigation(params: string){
    if (params === 'Cadastro'){
      navigation.navigate('Cadastro');
    } else {
      navigation.navigate('Listagem');
    }
  }


    return (
      <Container>
        <LogoMenor
          source={ require('../../assets/icone.png')}  
        />

          <Texto>E-mail</Texto>
          <Input></Input>

          <Texto>Confirmar E-mail</Texto>
          <Input></Input>

          <Texto>Senha</Texto>
          <Input></Input>
           
          <Texto>Confirme a senha</Texto>
          
          <Botao onPress={() => {handleNavigation('Listagem')}}>
            <Textoo>Registrar</Textoo>
          </Botao>    
        
      </Container>
    );
}

export default Cadastro;