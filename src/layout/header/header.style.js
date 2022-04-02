import styled from "styled-components";

export const LandOut = styled.div`
    width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1410px){
        width: 100%;
    }
`;

export const LogoImg = styled.img`
    width: 250px;
    margin-top: 50px;
`;
export const Tabs = styled.div`
    display: flex;
    gap: 35px;
    margin-top: 20px;
    @media screen and (max-width:600px){
        gap: 20px;
    }
    @media screen and (max-width:470px){
        gap: 15px;
    }
`;
export const Tab = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    cursor: pointer;
    line-height: 33px;
    text-align: center;
    color: ${(props)=>props.active ? "#9A00FF" : "#FFFFFF"};
    @media screen and (max-width:470px){
        font-size: 15px;
    }
`;