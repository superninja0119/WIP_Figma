import styled from "styled-components";

export const BtnOut = styled.div`
    min-width: 107px;
    height: 36px;
    box-sizing: border-box;
    background-color: ${(props)=>props.state ? "#000" : "#9A00FF"};
    border: 3px solid #9A00FF;
    margin: ${(props)=>props.side === "left" ? '0 0 0 17px' : '0 17px 0 0'};
    @media screen and (max-width:960px){
        order: 2;
    }
`;
export const BtnLeft = styled.div`
    border-right: 3px solid #9A00FF;
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    background-color: #000;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: ${(props)=>props.state ? "#D6FF00" : "rgba(121, 123, 137, 0.45)"};
    height: 100%;
    width: 84px;
    display: flex;
    justify-content: center;
    align-items: center;
`;