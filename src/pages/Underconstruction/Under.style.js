import styled from "styled-components";

export const UnderContain = styled.div`
    width: 1440px;
    padding-top: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1440px){
        width: 100%;
    }
`;
export const UnderlogoImg = styled.img`
    width: 400px;
    margin-bottom: 20px;
    @media screen and (max-width:460px){
        width: 300px;
    }
`;
export const SoonText = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:460px){
        font-size: 35px;
    }
`;
export const SocialIconImg = styled.img`
    cursor: pointer;
    :hover{
        fill: white;
    }
`;
export const SocialIcons = styled.div`
    position: absolute;
    bottom: 10px;
    @media screen and (max-height:670px){
        position: relative;
        margin-top: 230px;
    }
`;
