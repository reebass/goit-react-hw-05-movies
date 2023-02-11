import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerInfo = styled.div`
    background-color: #f5f5f5;
    margin: 20px 0;
`

export const ContainerMainInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 50px;
    margin-bottom: 15px;
`

export const Image = styled.img`
    display: block;
    width: 250px;
    height: 350px;
    object-fit: cover;
    margin: 0;
`

export const MainInfoRightSide = styled.div`
    padding: 20px;
    border: 1px solid #123c4a;
    border-radius: 10px; 
    margin-right: 40px;
    color: #123c4a;
`

export const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 30px;
` 

export const UserScore = styled.p`
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 20px;

    & > span {
        font-size: 20px;
        font-weight: 600;
        margin-right: 10px;
    }
`

export const TextWrap = styled.div`
    margin-bottom: 20px;
`

export const Subtitle = styled.h3`
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 5px;
`

export const Text = styled.p`
    font-size: 16px;
    margin: 0;
`






export const ContaiterAdditionalInfo = styled.div`
    display:block;
`

export const AdditionalInfoLinkWrap = styled.div`
    width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const AdditionalInfoLink = styled(Link)`
flex-basis: 50%;
  height: 100%;
  margin: 0;
  padding: 10px 15px;

  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  color: #123c4a;
  border: 1px solid #123c4a;

  transition: color 300ms ease, background-color 300ms ease;


  &:hover, :focus {
    background-color: #ed9547;
    color: #f5f5f5;
  }

  :first-child {
    border-right: 0;
  }
`

