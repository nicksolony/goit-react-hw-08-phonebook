import { AuthNav } from 'components/AuthNav/AuthNav';
import { Header, NavButton } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {

    return (
    <Header>
            <NavButton to="/">
                Home
            </NavButton>
            <NavButton to="/contacts">
                Contacts
            </NavButton>
            <AuthNav />
            <UserMenu/>
    </Header>
  );

};
