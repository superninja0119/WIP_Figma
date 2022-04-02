import styled from "styled-components";

export const Home = styled.div`
    width: 1440px;
    overflow: hidden;
    @media screen and (max-width:1440px){
        width: 100%;
    }
`;
export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:1000px){
        flex-direction: column;
        align-items: center;
    }
`;
export const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    position: relative;
    @media screen and (max-width:1250px){
        padding: 0 100px;
    }
    @media screen and (max-width:465px){
        padding: 0 60px;
    }
    @media screen and (max-width:440px){
        padding: 0 30px;
    }
`;
export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:1250px){
        flex-direction: column;
        margin-top: 50px;
        align-items: center;
    }
`;
export const TLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;
export const TMiddle = styled.div`
    display: flex;
    margin-top: 40px;
    position: relative;
    flex-direction: column;
    align-items: center;
`;
export const TRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width:1440px){
        padding-right: 20px;
    }
`;
export const MMiddle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width:1250px){
        flex-direction: column;
        gap: 20px;
    }
`;
export const MLeft = styled.div`
    @media screen and (max-width:1250px){
        display: none;
    }
`;
export const MRight = styled.div`
    @media screen and (max-width:1250px){
        display: none;
    }
`;
export const BLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media screen and (max-width:1250px){
        width: 100%;
        padding: 0 100px;
        margin-bottom: 50px;
    }
`;
export const BMiddle = styled.div`
    display: flex;
    align-items: center;
`;
export const BRight = styled.div`

`;
export const StickContainer = styled.div`
    position: relative;
`;
export const StickImg = styled.img`

`;
export const StickCircleImg = styled.img`
    position: absolute;
    left: 40px;
    bottom: -30px;
    animation: anim 2s infinite;
    @keyframes anim {
        0% {
            opacity: 1;
        }   
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const EarthContainer = styled.div`
    position: relative;
    margin-top: 70px;
    margin-right: 50px;
    :hover{
        .earthimg {
            opacity: 1;
        }
    }
`;
export const EarthImg = styled.img``;
export const Earthletter = styled.img`
    position: absolute;
    left: -33px;
    transition: all .3s;
    opacity: 0.3;
    top: -23px;
`;
export const WarningContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ThreeImg = styled.img`
    margin-right: 60px;
    animation: anim 3s infinite;
    @keyframes anim {
        0% {
            opacity: 0;
        }
        1% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
`;
export const WarningImg = styled.img`
    opacity: 0.4;
    transition: all .3s;
    :hover{
        opacity: 1;
    }
`;
export const GradientContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
`;
export const ConnectText = styled.div`
    color: #00FDFF;
    font-family: 'Andika New Basic';
    cursor: pointer;
    margin: 50px 0;
`;
export const LogoImg = styled.img`
    width: 150px;
`;
export const HomeMenu = styled.div`
    font-family: 'Andika New Basic';
    font-size: 14.5px;
    display: flex;
    margin-top: 20px;
    gap: 20px;
`;
export const HomeMenuItem = styled.div`
    cursor: pointer;
    color: #e6e6e6;
    span{
        color: #9A00FF;
    }
`;
export const BuyMenu = styled.div`
    color: #e6e6e6;
    font-family: 'Andika New Basic';
    font-size: 14.5px;
    display: flex;
    margin-top: 20px;
    margin-bottom: 40px;
    transition: all .3s ease-in-out;
    column-gap: 22px;
    animation: changecolor 4s infinite;
    @keyframes changecolor {
        0% {
            background: linear-gradient(180deg, #0085FF 0%, #597FFC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            transition: all .3s ease-in-out;
            text-shadow: 0px 0px 7px rgba(89, 127, 252, 0.33);
        }
        50% {
            background: linear-gradient(180deg, #00FDFF 0%, #00FDFC 47.4%, #00FF09 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all .3s ease-in-out;
            background-clip: text;
            text-fill-color: transparent;
            text-shadow: 0px 0px 7px rgba(89, 127, 252, 0.33);
        }
        100% {
            background: linear-gradient(180deg, #00FF09 67.19%, #597FFC 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all .3s ease-in-out;
            background-clip: text;
            text-fill-color: transparent;
            text-shadow: 0px 0px 7px rgba(89, 127, 252, 0.33);
        }
    }
    @media screen and (max-width:400px){
        gap: 15px;
    }
`;
export const BuyMenuItem = styled.div`
    cursor: pointer;
`;
export const Text1 = styled.div`
    color: #e6e6e6;
    width: 360px;
    text-align: center;
    font-family: 'Andika New Basic';
    font-size: 14px;
    @media screen and (max-width:400px){
        width: 100%;
        padding: 0 10px;
    }
`;
export const Text2 = styled.div`
    color: #e6e6e6;
    font-family: 'Andika New Basic';
    font-size: 14px;
    margin-top: 15px;
    text-align: center;
    width: 370px;
    @media screen and (max-width:400px){
        width: 100%;
        padding: 0 10px;
    }
`;
export const PlusImg = styled.img`
    position: absolute;
    bottom: 0;
    right: -100px;
    animation: plusanim 10s infinite;
    @keyframes plusanim {
        0% {
            opacity: 1;
        }
        10% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width:610px){
        display: none;
    }
`;
export const BackBtnImg = styled.img`
    position: absolute;
    left: 20px;
    cursor: pointer;
    bottom: 20px;
    animation: backanim 5s infinite;
    @keyframes backanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }
`;
export const BatteryContainer = styled.div`
    margin-left: 140px;
    display: flex;
`;
export const BatteryImg = styled.img`
    width: 170px;
    animation: batteryanim 10s infinite;
    @keyframes batteryanim {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 1;
            content: url('img/twobattery.svg');
            width: 170px;
        }   
        75% {
            opacity: 1;
            content: url('img/fourbattery.svg');
            width: 170px;
        }
        100% {
            opacity: 1;
            content: url('img/allbattery.svg');
            width: 170px;
        }
    }
`;
export const BatteryPlusImg = styled.img`
    margin-top: -100px;
    margin-left: 30px;
    animation: plusanim 6s infinite;
    @keyframes plusanim {
        0% {
            opacity: 1;
        }
        10% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width:420px){
        margin-left: 0;
    }
`;
export const BottomText = styled.div`
    font-family: 'Andika New Basic';
    color: #5b7ff8;
    width: 440px;
    line-height: 20px;
    font-size: 16px;
    text-align: center;
    span{
        color: #00fdff;
        font-style: italic;
    }
    @media screen and (max-width:500px){
        width: 100%;
        padding: 0 20px;
    }
`;
export const FactImg = styled.img`
    width: 400px;
    margin-bottom: -120px;
    animation: factanim 4s infinite;
    @keyframes factanim {
        0% {
            opacity: 0.2;
        }
        3% {
            opacity: 1;
        }
        100% {
            opacity: 0.2;
        }
    }
`;

export const Gradient1 = styled.div`
    background: linear-gradient( -45deg, #341d2e , #000, #321e2d );
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 265px;
    height: 365px;
    ::after {
        content: "";
        position: absolute;
        width: 261px;
        border-radius: 10px;
        top: 2px;
        left: 2px;
        height: 361px;
        background-color: black;
        @media screen and (max-width:1250px){
            width: calc(100% - 4px);
        }
    }
    @media screen and (max-width:1250px){
        order: 2;
    }
`;
export const Gradient2 = styled.div`
    background: linear-gradient( #283b2f ,#000, #642a8a, #000,#1b3428 );
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 265px;
    height: 365px;
    ::after {
        content: "";
        position: absolute;
        width: 261px;
        border-radius: 10px;
        top: 2px;
        left: 2px;
        height: 361px;
        background-color: black;
        @media screen and (max-width:1250px){
            width: calc(100% - 4px);
        }
    }
    @media screen and (max-width:1250px){
        order: 1;
    }
`;
export const Gradient3 = styled.div`
    background: linear-gradient( 45deg, #000 , #112933, #205859 );
    border-radius: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 265px;
    height: 365px;
    ::after {
        content: "";
        position: absolute;
        width: 261px;
        border-radius: 10px;
        top: 2px;
        left: 2px;
        height: 361px;
        background-color: black;
        @media screen and (max-width:1250px){
            width: calc(100% - 4px);
        }
    }
    @media screen and (max-width:1250px){
        order: 3;
    }
`;
export const GlogoImg = styled.img`
    width: 100px;
`;
export const Title = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 33px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 15px;
    color: #FFFFFF;
`;
export const SubText = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: ${(props)=>props.color};
`;
export const Subtitle = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
`;
export const Dollar = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 33px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 20px;
`;
export const Text = styled.div`
    font-family: 'Andika New Basic';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;

`;
export const ChipGrp = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    left: -48px;
    position: absolute;
    bottom: 15px;
    @media screen and (max-width:440px){
        display: none;
    }
`;
export const ChipImg = styled.img`
    width: 50px;
    @keyframes chipanim {
        0% {
            opacity: 1;
        }
        1% {
            opacity: 0;
        }
        2% {
            opacity: 1;
        }
        3% {
            opacity: 0;
        }
        4% {
            opacity: 1;
        }
        5% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    :hover{
        animation: chipanim 5s;
    }
`;
export const LeftWaveImg = styled.img`

`;
export const RightWaveImg = styled.img`
    
`;
export const Chip2Grp = styled.div`
    position: absolute;
    top: -47px;
`;
export const Chip2Img = styled.img`
    width: 35px;
    @keyframes chipanim {
        0% {
            opacity: 1;
        }
        1% {
            opacity: 0;
        }
        2% {
            opacity: 1;
        }
        3% {
            opacity: 0;
        }
        4% {
            opacity: 1;
        }
        5% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    :hover{
        animation: chipanim 5s;
    }
`;
export const Chip3Grp = styled.div`
    position: absolute;
    right: -55px;
    top: 90px;
    @media screen and (max-width:440px){
        display: none;
    }
`;
export const Chip3Img = styled.img`
    @keyframes chipanim {
        0% {
            opacity: 1;
        }
        1% {
            opacity: 0;
        }
        2% {
            opacity: 1;
        }
        3% {
            opacity: 0;
        }
        4% {
            opacity: 1;
        }
        5% {
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    :hover{
        animation: chipanim 5s;
    }
`;
export const OneLineImg = styled.img`
    width: 100%;
    animation: onelineanim 8s infinite;
    @keyframes onelineanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width:1250px){
        display: none;
    }
`;
export const TwoLineImg = styled.img`
    width: 100%;
    animation: onelineanim 5s infinite;
    @keyframes onelineanim {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @media screen and (max-width:1250px){
        display: none;
    }
`;
