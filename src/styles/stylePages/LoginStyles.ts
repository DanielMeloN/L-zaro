import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #730000;
  align-items: center;
  flex: 1;

  padding-top: 40px;
`;

export const Input = styled.TextInput`
  background-color:#E2E2E2;
  height: 50px;
  width: 300px;
  margin-Top:10px;
  margin-Bottom:20px;
  border-radius: 100px;
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

export const Link = styled.Text`
  color: #FFFFFF;
`;

export const LinkContainer = styled.TouchableOpacity`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;        
`;

export const TextButton = styled.Text`
  color: #333;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 16px;
  align-items: center;
`;