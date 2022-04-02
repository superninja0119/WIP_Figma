import React from "react";
import { Link } from "react-router-dom";
import {Home,Top,Middle,Bottom,TLeft,TMiddle,TRight,MMiddle,MLeft,MRight,GradientContent,BLeft,BMiddle,BRight,StickContainer,StickImg,StickCircleImg,EarthContainer,EarthImg,Earthletter,ThreeImg,WarningImg,WarningContainer,ConnectText,LogoImg,HomeMenu,HomeMenuItem,BuyMenu,BuyMenuItem,Text1,Text2,PlusImg,BackBtnImg,BatteryContainer,BatteryImg,BatteryPlusImg,BottomText,FactImg,Gradient1,Gradient2,Gradient3,GlogoImg,Title,SubText,Subtitle,Dollar,Text,ChipGrp,ChipImg,LeftWaveImg,RightWaveImg,Chip2Grp,Chip2Img,Chip3Grp,Chip3Img,OneLineImg,TwoLineImg,} from "./dashboard.style";

export default function HomeContainer() {
    return (
        <>
            <Home>
                <Top>
                    <TLeft>
                        <StickContainer>
                            <StickImg src='img/stick.svg' alt='' draggable={false} />
                            <StickCircleImg src='img/stick-circle.svg' alt='' draggable={false} />
                        </StickContainer>
                        <EarthContainer>
                            <Earthletter src='img/earth-letter.png' className="earthimg" alt='' draggable={false} />
                            <EarthImg src='img/earth.svg' alt='' draggable={false} />
                        </EarthContainer>
                    </TLeft>
                    <TMiddle>
                        <LogoImg src='img/underlogo.png' alt='' draggable={false} />
                        <HomeMenu>
                            <Link to='/home'>
                                <HomeMenuItem><span>Home</span></HomeMenuItem>
                            </Link>
                            <Link to='/circuit'>
                                <HomeMenuItem>Circuit</HomeMenuItem>
                            </Link>
                            <Link to='/loop'>
                                <HomeMenuItem>The Loop</HomeMenuItem>
                            </Link>
                            <Link to='/lyte'>
                                <HomeMenuItem>Lyte</HomeMenuItem>
                            </Link>
                            <Link to='/under'>
                                <HomeMenuItem>Docs</HomeMenuItem>
                            </Link>
                        </HomeMenu>
                        <BuyMenu>
                            <Link to='/under'>
                                <BuyMenuItem>Buy Amp</BuyMenuItem>
                            </Link>
                            <Link to='/under'>
                                <BuyMenuItem>Buy Current</BuyMenuItem>
                            </Link>
                            <Link to='/under'>
                                <BuyMenuItem>Farm Amp</BuyMenuItem>
                            </Link>
                            <Link to='/under'>
                                <BuyMenuItem>Stake Current</BuyMenuItem>
                            </Link>
                        </BuyMenu>
                        <Text1>
                            AMP is an algorithmic stablecoin on Fuse, pegged to the price of 1 FUSE via seigniorage.
                        </Text1>
                        <Text2>
                            Stake your AMP-FUSE LP in the Circuit to earn CURRENT rewards. Then stake your earned CURRENT in the Loop to earn more AMP.
                        </Text2>
                        <PlusImg src='img/plus.svg' draggable={false} alt='' />
                    </TMiddle>
                    <TRight>
                        <ThreeImg src='img/threeway.png' alt='' draggable={false}/>
                        <WarningContainer>
                            <Link to='/under'>
                                <ConnectText>CONNECT</ConnectText>
                            </Link>
                            <WarningImg src='img/warning.png' alt='' draggable={false} />
                        </WarningContainer>
                    </TRight>
                </Top>
                <Middle>
                    <MLeft>
                        <LeftWaveImg src='img/leftwave.svg' alt='' draggable={false} />
                    </MLeft>
                    <MMiddle>
                        <Gradient1>
                            <GradientContent>
                                <GlogoImg src='img/1.png' alt='' draggable={false} />
                                <Title>CURRENT</Title>
                                <Subtitle>CURRENT PRICE</Subtitle>
                                <SubText color="#FF60D7">00.0000 TOKEN</SubText>
                                <Dollar>$00.0000000</Dollar>
                                <Text>MARKETCAP: 00000000</Text>
                                <Text>CIRCULATING SUPPLY: 00000000</Text>
                                <Text>TOTAL SUPPLY: 00000000</Text>
                            </GradientContent>
                            <ChipGrp>
                                <ChipImg src='img/pinkchip.svg' alt='' draggable={false} />
                                <ChipImg src='img/pinkchip.svg' alt='' draggable={false} />
                            </ChipGrp>
                        </Gradient1>
                        <OneLineImg src='img/leftline.svg' alt='' draggable={false} />
                        <Gradient2>
                            <GradientContent>
                                <GlogoImg src='img/2.png' alt='' draggable={false} />
                                <Title>AMP</Title>
                                <Subtitle>CURRENT PRICE</Subtitle>
                                <SubText color="#8344ad">00.0000 TOKEN</SubText>
                                <Dollar>$00.0000000</Dollar>
                                <Text>MARKETCAP: 00000000</Text>
                                <Text>CIRCULATING SUPPLY: 00000000</Text>
                                <Text>TOTAL SUPPLY: 00000000</Text>
                            </GradientContent>
                            <Chip2Grp>
                                <Chip2Img src='img/orangechip.svg' alt='' draggable={false} />
                                <Chip2Img src='img/orangechip.svg' alt='' draggable={false} />
                                <Chip2Img src='img/orangechip.svg' alt='' draggable={false} />
                                <Chip2Img src='img/orangechip.svg' alt='' draggable={false} />
                            </Chip2Grp>
                        </Gradient2>
                        <TwoLineImg src='img/rightline.svg' alt='' draggable={false} />
                        <Gradient3>
                            <GradientContent>
                                <GlogoImg src='img/3.png' alt='' draggable={false} />
                                <Title>LYTE</Title>
                                <Subtitle>CURRENT PRICE</Subtitle>
                                <SubText color="#77d3e9">00.0000 TOKEN</SubText>
                                <Dollar>$00.0000000</Dollar>
                                <Text>MARKETCAP: 00000000</Text>
                                <Text>CIRCULATING SUPPLY: 00000000</Text>
                                <Text>TOTAL SUPPLY: 00000000</Text>
                            </GradientContent>
                            <Chip3Grp>
                                <Chip3Img src='img/bluechip.svg' alt='' draggable={false} />
                            </Chip3Grp>
                        </Gradient3>
                    </MMiddle>
                    <MRight>
                        <RightWaveImg src='img/rightwave.svg' alt='' draggable={false} />
                    </MRight>
                </Middle>
                <Bottom>
                    <BLeft>
                        <Link to='/'>
                            <BackBtnImg src='img/back.svg' alt='' draggable={false} />
                        </Link>
                        <BatteryContainer>
                            <BatteryImg src='img/twobattery.svg' alt='' draggable={false}/>
                            <BatteryPlusImg src='img/plus.svg' alt='' draggable={false}/>
                        </BatteryContainer>
                    </BLeft>
                    <BMiddle>
                        <BottomText>
                            Below peg? Trade your AMP for LYTE to help close the Circuit so the Loop keeps generating electricity! <span>Read More</span>
                        </BottomText>
                    </BMiddle>
                    <BRight>
                        <FactImg src='img/factory.svg' alt='' draggable={false} />
                    </BRight>
                </Bottom>
            </Home>
        </>
    )
}
