import { Link } from "react-router-dom";
import styled from "styled-components";

export const Item = styled.li`
    font-size: 17px;
    font-weight: 400;
    color: #f5f5f5;
    

    :not(:last-child){
        margin-bottom: 5px;
    }

    :hover {
        color: #ed9547;
    }
`

export const MovieLink = styled(Link)`
    color: currentColor;
    text-decoration: none;
`

