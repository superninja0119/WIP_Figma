import styled from "styled-components";

export const BoardPartOut = styled.div`
    border: 2px solid #FFFFFF;
    border-radius: 20px;
    width: 950px;
    padding: 25px 70px;
    position: relative;
    margin-top: 30px;
    @media screen and (max-width:1000px){
        width: 95%;
    }
    @media screen and (max-width:700px){
        padding: 25px 50px;
    }
    @media screen and (max-width:480px){
        padding: 25px 30px;
    }
`;
export const Title = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 33px;
    line-height: 48px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    @media screen and (max-width:480px){
        font-size: 23px;
        line-height: 50px;
    }
`;
export const TitleImg = styled.img`
    width: 60px;
    @media screen and (max-width:480px){
        width: 40px;
    }
`;
export const BodyPartOut = styled.div`
    border: 1.5px solid rgba(255,255,255,0.5);
    border-radius: 20px;
    padding: 13px;
`;
export const BodyContainer = styled.div`
    border: 2px solid #fff;
    border-radius: 20px;
`;
export const BodyRow = styled.div`
    display: flex;
    width: 100%;
    @media screen and (max-width:660px){
        flex-direction: column;
    }
`;
export const BodyLeft = styled.div`
    border-right: 2px solid #FFFFFF;
    border-bottom: 2px solid #FFFFFF;
    padding: 40px 20px 20px;
    display: flex;
    width: 50%;
    align-items: center;
    @media screen and (max-width:960px){
        flex-direction: column;
        padding: 20px;
        row-gap: 10px;
    }
    @media screen and (max-width:660px){
        width: 100%;
        border-right: none;
    }
`;
export const BodyRight = styled.div`
    border-bottom: 2px solid #FFFFFF;
    padding: 40px 20px 20px;
    display: flex;
    width: 50%;
    align-items: center;
    text-align: left;
    @media screen and (max-width:960px){
        flex-direction: column;
        padding: 20px;
        row-gap: 10px;
    }
    @media screen and (max-width:660px){
        width: 100%;
    }
`;
export const FooterOut = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
export const BottomImgContainer = styled.div`
    position: absolute;
    bottom: -65px;
    display: flex;
    justify-content: center;
    width: calc(100% - 140px);
    @media screen and (max-width:700px){
        width: calc(100% - 100px);
    }
    @media screen and (max-width:480px){
        width: calc(100% - 60px);
    }
`;
export const BottomImg = styled.img``;

export const TextPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${(props)=>props.side === "left" ? "flex-end" : "flex-start"};
    @media screen and (max-width:960px){
        align-items: center;
    }
`;
export const TokenTitle = styled.div`
    font-family: 'Andika New Basic';
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #fff;
`;
export const TokenText = styled.div`
    font-family: 'Andika New Basic';
    font-weight: 400;
    font-size: 11px;
    color: #FFFFFF;
`;
export const RewardPart = styled.div`
    width: 100%;
    padding: 25px;
    display: flex;
    @media screen and (max-width:610px){
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
    }
`;
export const RewardLeft = styled.div`
    font-family: 'Andika New Basic';
    font-weight: 400;
    font-size: 16px;
    width: 50%;
    line-height: 20px;
    text-align: right;
    color: #D6FF00;
    @media screen and (max-width:610px){
        width: 100%;
        text-align: center;
    }
`;
export const RewardRight = styled.div`
    width: 50%;
    font-family: 'Andika New Basic';
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 23px;
    cursor: pointer;
    text-align: right;
    color: #00FF09;
    .rightIcon{
        margin-right: 10px;
    }
    @media screen and (max-width:610px){
        width: 100%;
        justify-content: center;
    }
`;
export const CircuitTopImg = styled.img`
    position: absolute;
    top: -210px;
    @media screen and (max-width:1000px){
        display: none;
    }
`;