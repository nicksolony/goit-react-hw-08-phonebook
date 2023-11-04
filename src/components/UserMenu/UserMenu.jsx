import { useDispatch, useSelector } from "react-redux";
import { UserEmail, UserMenuContainer } from "./UserMenu.styled";
import { authOperations, authSelectors } from "redux/auth";




export const UserMenu = () => {

    const dispatch = useDispatch();
    const email = useSelector(authSelectors.getUserEmail);


    return (
        <UserMenuContainer>
            <UserEmail>{email}</UserEmail>
            <button type="button" onClick={() => dispatch(authOperations.logOut())}>
            Logout
            </button>
        </UserMenuContainer>
    );
};