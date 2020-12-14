import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  font-weight: bold;
  padding: 2px 6px; 
  border-radius: 10px;
`

export default function ToogleButton({handleTheme, theme}){
  let label = '';
  if(theme.title==='dark'){
    label = 'Mudar para Light mode';
  }else{
    label = 'Mudar para dark mode';
  }
  return(
    <Button onClick={handleTheme}>{label}</Button>
  )
}