import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer";
import ViewBtn from "../../components/CircuitBtn"; 
import {FiArrowRight} from "react-icons/fi";
import { BoardPartOut,Title,TitleImg,BodyPartOut,BodyContainer,BodyRow,BodyLeft,BodyRight,FooterOut,BottomImg,BottomImgContainer,CircuitTopImg,TextPart,TokenTitle,TokenText,RewardPart,RewardLeft,RewardRight, } from "./breaker.style";

export default function BreakerContainer() {
    return (
        <BoardPartOut>
            <CircuitTopImg src='img/circuittop.svg' alt='' />
            <Title>
                <TitleImg src='img/1.png' alt='' draggable={false} />
                CIRCUIT BOARD
            </Title>
            <BodyPartOut>
                <BodyContainer>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={true}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={true}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={false}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={false}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={true}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <BodyRow>
                        <BodyLeft>
                            <TextPart side="left">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                            <ViewBtn side="left" state={true}/>
                        </BodyLeft>
                        <BodyRight>
                            <ViewBtn side="right" state={true}/>
                            <TextPart side="right">
                                <TokenTitle>$TOKEN - $TOKEN LP</TokenTitle>
                                <TokenText>Deposit TOKEN/TOKEN LP Earn TOKEN</TokenText>
                            </TextPart>
                        </BodyRight>
                    </BodyRow>
                    <RewardPart>
                        <RewardLeft>Stake LP in a Circuit to earn CURRENT rewards.</RewardLeft>
                        <RewardRight>
                            <FiArrowRight className="rightIcon" />
                            AUTOCOMPOUNDERS
                        </RewardRight>
                    </RewardPart>
                </BodyContainer>
            </BodyPartOut>
            <FooterOut>
                <Footer />
            </FooterOut>
            <BottomImgContainer>
                <BottomImg src='img/circuitbottom.svg' alt='' />
            </BottomImgContainer>
        </BoardPartOut> 
    )
}
