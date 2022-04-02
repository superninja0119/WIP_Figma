import styled from "styled-components";

export const CircuitOut = styled.div`
    width: 1440px;
    display: flex;
    margin-top: 60px;
    gap: 50px;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width:1410px){
        width: 100%;
    }
`;
export const CircuitLeft = styled.div`
      border: 1.5px solid #FFFFFF;
      border-radius: 20px;
      padding: 33px 80px 40px;
      width: 900px;
      position: relative;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width:930px){
          width: 95%;
          padding: 33px 40px 40px;
      }
`;
export const Title = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
`;
export const Btn = styled.div`
      width: 197px;
      height: 35px;
      font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 24px;
    color: #D6FF00;
    border: 1px solid #D6FF00;
    box-sizing: border-box;
    border-radius: 10px;
`;
export const SubTextPart = styled.div`
      display: flex;
      gap: 45px;
      margin-top: 30px;
      @media screen and (max-width:600px){
          flex-wrap: wrap;
          justify-content: center;
          column-gap: 40px;
          row-gap: 20px;
      }
`;
export const SubItem = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
`;
export const SubTitle = styled.div`
      font-family: 'Andika New Basic';
        font-weight: 400;
        font-size: 14px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #D6FF00;
`;
export const SubText = styled.div`
      font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`;
export const LeftImg = styled.img`
    position: absolute;
    left: -280px;
    top: -150px;
    @media screen and (max-width:1460px){
        display: none;
    }
`;
export const InputGrp = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 37px;
    @media screen and (max-width:700px){
        flex-direction: column;
    }
`;
export const DepositBtn = styled.div`
    width: 107px;
    height: 36px;
    border-radius: 10px;
    background: #D6FF00;
    cursor: pointer;
    font-family: 'Andika New BasicBold';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #000000;
`;
export const DepositInput = styled.input`
    height: 80px;
    padding: 0 10px;
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    display: flex;
    width: 100%;
    border-radius: 13px;
    border: 1px dashed rgba(255,255,255,0.5);
    align-items: center;
    color: #FFFFFF;
    margin: 20px 0 20px 0;
    background-color: transparent;
    :focus, :active {
        outline: none;
    }
`;
export const DepositPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media screen and (max-width:700px){
        width: 100%;
    }
`;
export const DepositTitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 27px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #FFFFFF;
    span{
        color: #D6FF00;
        margin: 0 4px 0 9px;
    }
`;
export const SubDepostText = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-top: 20px;
    color: rgba(255,255,255,0.5);
`;
export const WithdrawBtnGrp = styled.div`
    display: flex;
    gap: 15px;
`;
export const WithdrawBtn = styled.div`
    border: 1px solid #00FF09;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 3px 15px;
    cursor: pointer;
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #00FF09;
`;
export const LeftImg2 = styled.img`
    position: absolute;
    left: -365px;
    top: 200px;
    @media screen and (max-width:1560px){
        display: none;
    }
`;
export const RightImg = styled.img`
    position: absolute;
    right: -310px;
    top: 250px;
    @media screen and (max-width:1560px){
        display: none;
    }
`;