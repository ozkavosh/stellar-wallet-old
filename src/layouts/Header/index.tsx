import { BiMoon } from 'react-icons/bi';
import { HeaderContainer } from '../../components/HeaderContainer';
import { HeaderTitle } from '../../components/HeaderTitle';
import { DarkModeBtn } from '../../components/DarkModeBtn';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Stellar Wallet</HeaderTitle>
      <DarkModeBtn>
        <BiMoon size={24}/>
      </DarkModeBtn>
    </HeaderContainer>
  )
}
