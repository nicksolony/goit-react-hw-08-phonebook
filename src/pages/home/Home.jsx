import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Home = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    // console.log(isLoggedIn);
    return (
        
        <>
            <h1>Welcome to contacts book!</h1>
            {!isLoggedIn && <p>Please login or signup to proceed</p>}
        
        </>
    )
}   