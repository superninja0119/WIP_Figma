import styled from "styled-components";

export const LandOut = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 30px;
`;
export const LeftContainer = styled.div`
  overflow: auto;
  max-width: 1300px;
  width: 80%;
  margin-right: 0;
  /* padding-top: 50px;
  width: 100%; */
`;
export const Left = styled.div`
  img {
    position: absolute;
  }
  position: relative;

  max-width: 1350px;
  aspect-ratio: 100/110;
  width: 85%;
  /* padding-top: 110%; */
  min-width: 500px;
`;

export const LogoImg = styled.img`
  top: 0%;
  width: 30%;
  animation: logoanim 5s infinite;
  @keyframes logoanim {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0.4;
    }
    100% {
      content: url("img/funnylogo.png");
    }
  }
`;
export const MachineContainer = styled.div`
  position: relative;
  /*   margin-left:170px; */
  max-width: 700px;
  width: 100%;
`;
export const MachineImg = styled.img`
  top: 10%;
  width: 20%;
  left: 25%;
  animation: machineanim 5s infinite;
  @keyframes machineanim {
    0% {
      content: url("img/landing/machineold.png");
    }
    50% {
      content: url("img/landing/machinenew.png");
    }
    100% {
      content: url("img/landing/machineold.png");
    }
  }
`;
export const PedestalImg = styled.img`
  position: absolute;
  left: 26%;
  top: 23%;
  width: 5%;
  animation: pedestalanim 10s infinite;
  @keyframes pedestalanim {
    0% {
      opacity: 1;
    }
    5% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const MachineLineImg = styled.img`
  position: absolute;
  left: 26.5%;
  width: 14%;
  top: 29.5%;
  animation: lineanim 5s infinite;
  @keyframes lineanim {
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
export const WhitelineImg = styled.img`
  position: absolute;
  left: 27%;
  width: 15%;
  top: 33.5%;
`;
export const LinearImg = styled.img`
  position: absolute;
  left: 31%;
  top: 34.2%;
  width: 9%;
  animation: linearanim 15s infinite;
  @keyframes linearanim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const StarImg = styled.img`
  position: absolute;
  left: 23.5%;
  top: 32%;
  width: 2%;
  animation: staranim 15s infinite;
  @keyframes staranim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const PinkLinearImg = styled.img`
  position: absolute;
  left: 17%;
  width: 10%;
  top: 36%;
  animation: pinklinearanim 8s infinite;
  @keyframes pinklinearanim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const LampImg = styled.img`
  position: absolute;
  left: 18%;
  width: 8%;
  top: 27%;
  animation: lampanim 10s infinite;
  @keyframes lampanim {
    0% {
      content: url("img/landing/lamp1.png");
    }
    45% {
      content: url("img/landing/lamp2.png");
    }
    75% {
      content: url("img/landing/lamp3.png");
    }
    100% {
      content: url("img/landing/lamp4.png");
    }
  }
`;
export const BubbleBottleImg = styled.img`
  position: absolute;
  width: 10%;
  left: 37%;
  top: 8%;
`;
export const BubblelightImg = styled.img`
  position: absolute;
  left: 38%;
  top: 17%;
  width: 6%;
  animation: bubblelightanim 20s infinite;
  @keyframes bubblelightanim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const BubblelineImg = styled.img`
  position: absolute;
  left: 37%;
  top: 21%;
  width: 6.5%;
  animation: bubblelineanim 13s infinite;
  @keyframes bubblelineanim {
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
    100% {
      opacity: 1;
    }
  }
`;
export const PinkCircleImg = styled.img`
  position: absolute;
  left: 37%;
  top: 26%;
  width: 6%;
  animation: pinkcircleanim 5s infinite;
  @keyframes pinkcircleanim {
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
export const RocketImg = styled.img`
  position: absolute;
  left: 45%;
  top: 22.8%;
  width: 5%;
`;
export const FourdotImg = styled.img`
  position: absolute;
  left: 45.5%;
  top: 32.8%;
  width: 4%;
  animation: fourdotanim 5s infinite;
  @keyframes fourdotanim {
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
export const RocketLineImg = styled.img`
  position: absolute;
  top: 10%;
  left: 44.6%;
  width: 6%;
  animation: fourdotanim 12s infinite;
  @keyframes fourdotanim {
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
export const PinkLampImg = styled.img`
  position: absolute;
  top: 2.5%;
  left: 43.8%;
  width: 7%;
  animation: pinklampanim 18s infinite;
  @keyframes pinklampanim {
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
export const PinkLamplightImg = styled.img`
  position: absolute;
  top: 1.5%;
  left: 43%;
  width: 8.5%;
  animation: lamplightanim 7s infinite;
  @keyframes lamplightanim {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const CircleLineImg = styled.img`
  position: absolute;
  left: 50%;
  top: 32.4%;
  width: 10%;
  animation: circlelineeanim 14s infinite;
  @keyframes circlelineeanim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    45% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    95% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const FlowerImg = styled.img`
  position: absolute;
  left: 58%;
  width: 6%;
  top: 26.5%;
`;
export const DiamondImg = styled.img`
  position: absolute;
  top: 23.5%;
  left: 58.9%;
  width: 4%;
  animation: diamondanim 6s infinite;
  @keyframes diamondanim {
    0% {
      content: url("img/landing/diamond1.png");
    }
    20% {
      content: url("img/landing/diamond2.png");
    }
    40% {
      content: url("img/landing/diamond1.png");
    }
    60% {
      content: url("img/landing/diamond2.png");
    }
    80% {
      content: url("img/landing/diamond1.png");
    }
    100% {
      content: url("img/landing/diamond2.png");
    }
  }
`;
export const YellowLinearImg = styled.img`
  position: absolute;
  left: 51%;
  top: 24%;
  width: 6%;
`;
export const PurpleLinearImg = styled.img`
  position: absolute;
  left: 51%;
  width: 15%;
  top: 8%;
`;
export const BlueStarImg = styled.img`
  position: absolute;
  left: 51%;
  width: 12.5%;
  top: 11%;
  animation: helloanim 10s infinite;
  @keyframes helloanim {
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
export const HelloImg = styled.img`
  position: absolute;
  left: 53%;
  top: 13.5%;
  width: 7.5%;
  animation: helloanim 6s infinite;
  @keyframes helloanim {
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
export const PlusImg = styled.img`
  position: absolute;
  left: 57%;
  top: 42%;
  width: 6%;
  animation: helloanim 4s infinite;
  @keyframes helloanim {
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
export const MouseImg = styled.img`
  position: absolute;
  top: 42%;
  width: 28%;
  left: 26%;
`;
export const TopstarImg = styled.img`
  position: absolute;
  top: 50%;
  width: 2%;
  left: 17%;
  animation: topstaranim 2s infinite;
  @keyframes topstaranim {
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
export const BottomStarImg = styled.img`
  position: absolute;
  width: 2.5%;
  top: 56%;
  left: 23%;
  animation: bottomstaranim 3s infinite;
  @keyframes bottomstaranim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const BigrocketImg = styled.img`
  position: absolute;
  left: 15%;
  top: 60%;
  width: 8%;
`;
export const DollarmarkImg = styled.img`
  position: absolute;
  left: 29.5%;
  top: 65.7%;
  width: 4%;
  animation: dotanim 3s infinite;
  @keyframes dotanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const DotboxImg = styled.img`
  position: absolute;
  left: 28%;
  width: 25%;
  top: 65%;
  animation: dotboxanim 8s infinite;
  @keyframes dotboxanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const StickImg = styled.img`
  position: absolute;
  top: 69%;
  left: 24%;
  width: 37%;
`;
export const StickCircleImg = styled.img`
  position: absolute;
  top: 76%;
  width: 25%;
  left: 29%;
  animation: stickcircleanim 8s infinite;
  @keyframes stickcircleanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const OrangedirectLineImg = styled.img`
  position: absolute;
  top: 35%;
  width: 6%;
  left: 45%;
  animation: orangelineanim 5s infinite;
  @keyframes orangelineanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const WhitedirectLineImg = styled.img`
  position: absolute;
  top: 71%;
  left: 23%;
  width: 6%;
  animation: whitedirectlineanim 5s infinite;
  @keyframes whitedirectlineanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const CircleLampImg = styled.img`
  position: absolute;
  left: 59%;
  width: 11%;
  top: 63%;
  animation: circlelampanim 3s infinite;
  @keyframes circlelampanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const CrocodileImg = styled.img`
  position: absolute;
  left: 60%;
  top: 55%;
  width: 11%;
  animation: corocodileanim 11s infinite;
  @keyframes corocodileanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const CoupleCircleImg = styled.img`
  position: absolute;
  left: 60%;
  top: 58.5%;
  width: 2%;
  animation: coupleanim 20s infinite;
  @keyframes coupleanim {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const ThreedirectImg = styled.img`
  position: absolute;
  top: 55.4%;
  left: 67%;
  width: 4%;
`;
export const ClockImg = styled.img`
  position: absolute;
  top: 48%;
  left: 69%;
  width: 7%;
  animation: clockanim 15s infinite;
  @keyframes clockanim {
    0% {
      content: url("img/landing/clock1.png");
    }
    50% {
      content: url("img/landing/clock2.png");
    }
    100% {
      content: url("img/landing/clock1.png");
    }
  }
`;
export const BatteryImg = styled.img`
  position: absolute;
  top: 50%;
  width: 4%;
  left: 62.5%;
  animation: batanim 15s infinite;
  @keyframes batanim {
    0% {
      content: url("img/landing/battery2.png");
    }
    50% {
      content: url("img/landing/battery4.png");
    }
    100% {
      content: url("img/landing/batteryall.png");
    }
  }
`;
export const MoneyImg = styled.img`
  position: absolute;
  left: 80%;
  top: 14%;
  width: 3.5%;
  animation: moneyanim 5s infinite;
  @keyframes moneyanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const MoneyImg2 = styled.img`
  position: absolute;
  left: 80%;
  top: 6%;
  width: 3.5%;
  animation: moneyanim2 3s infinite;
  @keyframes moneyanim2 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const MoneyBoxImg = styled.img`
  position: absolute;
  left: 78%;
  top: 19%;
  width: 8%;
`;
export const DotcircleImg = styled.img`
  position: absolute;
  left: 60%;
  top: 31%;
  width: 4%;
`;
export const GalguriImg = styled.img`
  position: absolute;
  left: 63%;
  width: 22%;
  top: 37%;
  animation: galgurianim 10s infinite;
  @keyframes galgurianim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const CarImg = styled.img`
  position: absolute;
  left: 76%;
  top: 47%;
  width: 12%;
`;
export const FiveDotImg = styled.img`
  position: absolute;
  left: 74%;
  top: 68%;
  width: 12%;
`;
export const SelmaeImg = styled.img`
  position: absolute;
  left: 72.5%;
  top: 79%;
  width: 25%;
`;
export const ChipImg = styled.img`
  position: absolute;
  left: 86%;
  top: 83.5%;
  width: 4%;
  animation: chipani 8s infinite;
  @keyframes chipani {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const OralineImg = styled.img`
  position: relative;
  top: 65%;
  left: 77%;
  width: 10%;
  animation: olineanim 8s infinite;
  @keyframes olineanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const PinkLineImg = styled.img`
  position: relative;
  top: 34%;
  left: 86%;
  width: 18%;
  animation: pinklianim 10s infinite;
  @keyframes pinklianim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const SeveralDotImg = styled.img`
  position: relative;
  top: 34%;
  width: 15%;
  left: 88.8%;
  animation: sevdotanim 3s infinite;
  @keyframes sevdotanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const EarchImg = styled.img`
  position: absolute;
  top: 65%;
  left: 90%;
  width: 16%;
  animation: earthani 13s infinite;
  @keyframes earthani {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    40% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const YesLineImg = styled.img`
  position: absolute;
  top: 75%;
  left: 84%;
  width: 10%;
`;
export const LastStarImg = styled.img`
  position: absolute;
  top: 62%;
  left: 90%;
  width: 3%;
`;
export const TargetImg = styled.img`
  position: absolute;
  top: 80%;
  left: 93%;
  width: 3%;
`;
export const GrassImg = styled.img`
  position: absolute;
  top: 85%;
  left: 92%;
  width: 6%;
  animation: grassanim 7s infinite;
  @keyframes grassanim {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const ThreeChipImg = styled.img`
  position: absolute;
  top: 31.5%;
  width: 7%;
  left: 78.5%;
  animation: threedotani 4s infinite;
  @keyframes threedotani {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
export const Right = styled.div`
  width: 150px;
  padding-left: 20px;
  padding-bottom: 5%;
  @media screen and (max-width: 900px) {
    padding-bottom: 0;
  }
`;
export const EnterBtn = styled.img`
  cursor: pointer;
  animation: enteranim 8s infinite;
  @keyframes enteranim {
    0% {
      content: url("img/landing/enter1.png");
    }
    50% {
      content: url("img/landing/enter2.png");
    }
    100% {
      content: url("img/landing/enter3.png");
    }
  }
`;
