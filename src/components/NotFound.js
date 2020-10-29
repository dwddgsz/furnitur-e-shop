import React from 'react'
import styled from 'styled-components';

const NotFoundWrapper = styled.article`
max-width:1200px;
margin:0 auto;
.not-found-heading {
    padding:50px 0;
    font-size:2.6rem;
    text-align:center;
    text-transform:capitalize;
}

`


const NotFound = () => {
    return (
        <NotFoundWrapper>
            <h3 className="not-found-heading">page not found</h3>
        </NotFoundWrapper>
    )
}

export default NotFound;