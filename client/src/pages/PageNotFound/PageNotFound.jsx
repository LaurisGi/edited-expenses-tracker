import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styledh1 = styled.h1`
    text-align: center;
`
const Styledh2 = styled.h2`
    text-align: center;
`

const LinkStyled = styled(Link)`
    display: flex;
    justify-content: center;
`;

  
const PageNotFound= () =>{
    return (
    <div>
        <Styledh1>404 Error</Styledh1>
        <Styledh2>Page Not Found</Styledh2>
        <LinkStyled to="/">Home</LinkStyled>
    </div>
    )
}
  
export default PageNotFound;