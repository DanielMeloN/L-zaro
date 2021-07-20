import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #730000;
  align-items: center;
  flex: 1;

  padding-top: 40px;
`;

export const Logo = styled.Image`
  color: #FFFFFF;
  width: 330px;
  height: 330px;

  margin: 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: #FFFFFF;

  align-items: center;
  justify-content: center;

  margin: 5%;
  width: 55%;
  height: 8%;

  border-radius: 16px;
`;

export const TextButton = styled.Text`
  color: #333;  
  font-weight: bold;
  font-family: sans-serif;
  font-size: 16px;
  align-items: center;
`;