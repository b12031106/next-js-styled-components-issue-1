import styled from 'styled-components'
import Header from '../components/Header/mobile';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <div>
      <Header />
      <Title>My page</Title>
    </div>
  );
}
