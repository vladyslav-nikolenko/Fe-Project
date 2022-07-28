import { ButtonStyled } from './index.styles';

function Button({ text = 'Button', ...attrs }) {
  return <ButtonStyled {...attrs}>{text}</ButtonStyled>;
}

export default Button;



