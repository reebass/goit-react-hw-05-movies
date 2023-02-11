import styled from "styled-components";

export const List = styled.ul`
    height: 400px;
    overflow-y: scroll;
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    list-style: none;

`
export const Item = styled.li`
    width: 100%;
    padding: 20px 20px;

    :nth-child(2n) {
        background-color: #e3e3e3;
    }
`

export const Title = styled.h3`
    font-size: 20px;
    margin: 0;
    margin-bottom: 10px;
    font-weight: 600;
    & > span {
        margin-left: 10px;
        font-weight: 400;
        font-size: 16px;
    }

`

export const Text = styled.p`
    font-size: 14px;
    margin: 0;
`

