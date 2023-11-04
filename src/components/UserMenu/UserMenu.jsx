import { useDispatch, useSelector } from "react-redux";
import { UserEmail, UserMenuContainer } from "./UserMenu.styled";
import { authSelectors } from "redux/auth";


export const UserMenu = () => {

    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);


    return (
        <UserMenuContainer>
            <UserEmail>{email}</UserEmail>
            <button type="button" onClick={() => console.log("i want to sign out")}>
            Logout
            </button>
        </UserMenuContainer>
    );
};