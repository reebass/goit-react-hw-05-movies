import styled from "styled-components";

export const List = styled.ul`
    height: 400px;
    overflow-y: scroll;

    padding: 20px 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    list-style: none;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #123c4a;
    border-radius: 4px;
    flex-basis: calc((100% - 40px) / 5);
`

export const ImageActor = styled.img`
    display: block;
    width: 150px;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px;
 `

export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    color: #123c4a;
 `


export const Text = styled.p`
    font-size: 14px;
    margin: 0;

    & > span {
        font-weight: 600;
    }
 `



