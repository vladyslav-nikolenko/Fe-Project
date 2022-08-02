import { Container, Ellipse } from './index.styles';

export default function Loader({ absolute = false }) {
  return (
    <Container absolute={absolute}>
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
    </Container>
  );
}


