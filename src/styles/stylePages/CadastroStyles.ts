import styled from 'styled-components/native';

export const Container = styled.View `
  flex: 1;
  background-color: #730000;
  align-items:center;
  padding-top: 8%;
`;

export const Texto = styled.Text `
  padding-Left: 30;
  align-Self:flex-start;
  color:  #FFF; 
`;

export const Textou = styled.Text`
  padding-Right: 30;
  align-Self: flex-end;
  color: #FFF;
`;

export const Textoo = styled.Text`
  color: #000;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 16px;
  align-items: center;
`;

export const Input = styled.TextInput`
  background-color: #E2E2E2;
  height: 50px;
  width: 300px;
  margin-Top:10px;
  margin-Bottom:20px;
`;

export const Botao = styled.TouchableOpacity `
   background-color: #FFFFFF;

  align-items: center;
  justify-content: center;

  margin: 5%;
  width: 55%;
  height: 8%;

  border-radius: 16px;
`;

export const LogoMenor = styled.Image`
  width: 200;
  height: 180;        
`;