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
export const Title = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 700;
    margin-top: 30px;
    font-size: 50px;
    line-height: 81px;
    text-align: right;
    color: #FFFFFF;
    @media screen and (max-width:600px){
        font-size: 30px;
    }
`;
export const LampImg = styled.img`
    width: 130px;
    @media screen and (max-width:600px){
        width: 90px;
    }
`;
export const PricePart = styled.div`

`;
export const PText = styled.div`
    display: flex;
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    justify-content: center;
    color: #FFFFFF;
    align-items: center;
    span{
        width: 60px;
        border-bottom: 1px dashed #D6FF00;
        margin: 0 17px;
        height: 5px;
    }
    @media screen and (max-width:470px){
        font-size: 18px;
    }
`;
export const PL = styled.div`
    display: flex;
    width: 116px;
    justify-content: flex-end;
`;
export const RemainPart = styled.div`
    margin-top: 63px;
`;
export const RemainTitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    text-align: center;
    color: #FFFFFF;
`;
export const RemainValue = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    .text-color-yellow{
        color: #D6FF00;
    }
    .text-color-purple{
        color: #9A00FF;
    }
`;
export const DepositPart = styled.div`
    display: flex;
    align-items: center;
    margin-top: 80px;
    @media screen and (max-width:470px){
        flex-direction: column;
        width: 100%;
    }
`;
export const DepositInput = styled.input`
    background: rgba(0, 0, 0, 0.25);
    border: 1px dashed #D6FF00;
    border-radius: 10px;
    width: 300px;
    margin-right: 30px;
    height: 43px;
    font-family: 'Andika New Basic';
    color: #fff;
    padding: 0 15px;
    :focus,:active{
        outline: none;
    }
    @media screen and (max-width:470px){
        margin-right: 0;
        width: 90%;
    }
`;
export const DepositBtn = styled.div`
    width: 107px;
    height: 36px;
    font-family: 'Andika New BasicBold';
    background: #D6FF00;
    color: #000;
    cursor:pointer;
    font-size: 17px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:470px){
        margin-top: 15px;
    }
`;
export const ClaimPart = styled.div`
    width: 437px;
    margin: 99px 0 120px;
    border: 1px dashed #FFFFFF;
    border-radius: 20px;
    padding: 21px 19px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:470px){
        width: 90%;
    }
`;
export const ClaimLineText = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    width: 100%;
    font-size: 22px;
    line-height: 35px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:470px){
        font-size: 18px;
    }
`;
export const ClaimBtn = styled.div`
    width: 107px;
    height: 36px;
    cursor: pointer;
    background: #9A00FF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    font-family: 'Andika New BasicBold';
    font-size: 17px;
    margin-top: 40px;
`;

