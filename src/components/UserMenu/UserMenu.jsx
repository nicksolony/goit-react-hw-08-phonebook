import { UserMenuContainer, WelcomeMessage } from "./UserMenu.styled";

export const UserMenu = () => {

    return (
        <UserMenuContainer>
            <WelcomeMessage>Welcome, This should be username</WelcomeMessage>
            <button type="button" onClick={() => console.log("i want to sign out")}>
            Log Out
            </button>
        </UserMenuContainer>
    );
};