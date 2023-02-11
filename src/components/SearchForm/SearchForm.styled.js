import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    margin-bottom: 30px;
`

export const Input = styled.input`
    width: 300px;
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 4px 0 0 4px;
    padding: 5px 10px;

    font-size: 18px;
    font-weight: 400;
    color: #123c4a;
`

export const Button = styled.button`
    margin: 0;
    padding: 5px 10px;

    width: 100px;
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 0 4px 4px 0;


    font-size: 16px;
    font-weight: 600;
    color: #123c4a;
    cursor: pointer;

    transition: color 300ms ease, background-color 300ms ease;

    &:hover {
    background-color: #ed9547;
    color: #f5f5f5;
  }
`