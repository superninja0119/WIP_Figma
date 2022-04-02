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

export const SocialIconImg = styled.img`
    cursor: pointer;
    :hover{
        fill: white;
    }
`;
export const SocialIcons = styled.div``;