import { UserMenuContainer, WelcomeMessage } from "./UserMenu.styled";

export const UserMenu = () => {

    return (
        <UserMenuContainer>
            <WelcomeMessage>mango@mail.com</WelcomeMessage>
            <button type="button" onClick={() => console.log("i want to sign out")}>
            Logout
            </button>
        </UserMenuContainer>
    );
};