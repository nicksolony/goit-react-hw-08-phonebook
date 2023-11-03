import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    aligh-items: center;
    border-bottom: 1px solid #2A363B;
`;

export const NavButton = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2A363B;

    &.active{
        color: #E84A5F;
    }
`;