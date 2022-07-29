import { StyledButton } from './index.styles';

function Button({ text = 'Button', ...attrs }) {
  return <StyledButton {...attrs}>{text}</StyledButton>;
}

export default Button;



