import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContextWrapper";
import { Button } from "../Button/Button";
import styled from "styled-components";
import { LOCAL_STORAGE_JWT_TOKEN_KEY } from "../../contexts/constants";


const Header = styled.div`
padding: 10px 40px;
`

export const PageLayout = () => {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/login" />
    }

    const handleLogout = () => {
        localStorage.removeItem(LOCAL_STORAGE_JWT_TOKEN_KEY);
        setUser(null);
        navigate('/login');
    }

    return (
        <div>
            <Header>
                <Button onClick={handleLogout} >Log out</Button>
            </Header>
            <Outlet />
        </div>
    )
};