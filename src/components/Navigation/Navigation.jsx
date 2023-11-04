import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, NavButton } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
    <Header>
            <NavButton to="/">
                Home
            </NavButton>
            <NavButton to="/contacts">
                Contacts
            </NavButton>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );

};
