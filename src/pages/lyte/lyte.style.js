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
export const TitleMiddle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const LampImg = styled.img`
    width: 200px;
`;export const TopTitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #597FFC;
    margin: 33px 0 25px;
`;

export const TitleMiddleTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TitleMiddleTopText = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

`;
export const TitleMiddleTopValue = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #00FCFF;
`;
export const TopPart = styled.div`
    display: flex;
    column-gap: 50px;
    margin-bottom: 90px;
    @media screen and (max-width:900px){
        flex-direction: column;
        row-gap: 50px;
    }
`;
export const TopPartLeft = styled.div`
    margin-top: 70px;
    @media screen and (max-width:900px){
        margin-top: 0;
    }
`;
export const TopPartLeftTitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width:900px){
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;
export const TopPartLeftTextContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 280px;
    justify-content: space-between;
`;
export const TopPartLeftTextLabel = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
`;
export const TopPartLeftTextValue = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #FFFFFF;
`;
export const AppOut = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
    justify-content: flex-end;
    @media screen and (max-width:900px){
        justify-content: center;
    }
`;
export const ApproveBtn = styled.div`
    width: 107px;
    height: 36px;
    border-radius: 10px;
    background: #00FCFF;
    cursor: pointer;
    border: 1px solid #00FCFF;
    box-sizing: border-box;
    font-family: 'Andika New BasicBold';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #000000;
    border: 0.5px solid #000000;
`;
export const FooterContainer = styled.div`
    position: absolute;
    bottom: 10px;
    @media screen and (max-height:660px), (max-width:900px){
        position: relative;
    }
`;