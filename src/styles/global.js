import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  transition: all 0.20s linear
}

body{
  background: ${props=>props.theme.colors.backgroundBody};
  font-size: 14px;
  font-family: sans-serif;
  
}

.containerFlex{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;