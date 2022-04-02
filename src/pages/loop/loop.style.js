import styled from "styled-components";

export const CircuitOut = styled.div`
    width: 1440px;
    display: flex;
    /* margin-top: 60px; */
    gap: 50px;
    justify-content: center;
    @media screen and (max-width:1410px){
        width: 100%;
    }
    @media screen and (max-width:950px){
        flex-direction: column;
        align-items: center;
    }
`;
export const CircuitLeft = styled.div`
      border: 1.5px solid #FFFFFF;
      border-radius: 20px;
      padding: 32px 0;
      width: 300px;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .questionmark{
          color: #fff;
          cursor: pointer;
          font-size: 20px;
          top: 15px;
          right: 15px;
          position: absolute;
      }
      @media screen and (max-width:950px){
          order: 3;
          width: 90%;
      }
`;
export const CircuitMiddle = styled.div`
      position: relative;
      padding: 20px 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media screen and (max-width:950px){
          height: 200px;
          order: 2;
          align-items: center;
      }
      @media screen and (max-width:570px){
          height: auto;
      }
`;
export const CircuitRight = styled.div`
      position: relative;
      border: 1.5px solid #FFFFFF;
      border-radius: 20px;
      padding: 32px 0;
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width:950px){
          order: 1;
          width: 90%;
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
export const CardImg = styled.img`
      width: ${(props)=>props.value};
      margin: 20px 0;
`;
export const TextPart = styled.div`
      
`;
export const TextTitle = styled.div`
      font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
`;
export const TextText = styled.div`
      font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
`;
export const Btn = styled.div`
      width: 107px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Andika New BasicBold';
        font-style: normal;
        cursor: pointer;
        font-weight: 400;
        font-size: 18px;
        line-height: 29px;
        text-align: center;
        color: #000000;
        border: 0.5px solid #0000;
        margin-top: 30px;
        background: ${(props)=>props.bgcolor};
        box-shadow: 0px 4px 4px rgba(0, 87, 255, 0.25);
        border-radius: 10px;
`;
export const SubTextPart = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      @media screen and (max-width:950px){
          flex-direction: row;
          column-gap: 30px;
      }
      @media screen and (max-width:600px){
          flex-wrap: wrap;
          justify-content: center;
          row-gap: 30px;
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
export const MiddleBtn = styled.div`
      width: 200px;
      height: 39px;
      border: 1px solid #D6FF00;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #D6FF00;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:570px){
        margin-top: 50px;
    }
`;
export const TopImg = styled.img`
    position: absolute;
    top: -273px;
    right: 20px;
    @media screen and (max-width:950px){
        display: none;
    }
`;
export const LeftImg = styled.img`
    position: absolute;
    left: -305px;
    top: 170px;
    @media screen and (max-width:1550px){
        display: none;
    }
`;
export const BottomImg = styled.img`
    position: absolute;
    bottom: -192px;
`;

export const TopTitlePart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 35px 0 52px 0;
`;
export const TopTitlePartTitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #D6FF00;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const TopTitlePartText = styled.div`
    font-family: 'Andika New Basic';
    font-style: italic;
    font-weight: 400;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    color: #597FFC;

`;
