import React from "react";
import { Link } from "react-router-dom";
import {BsQuestionCircle} from "react-icons/bs";
import { CircuitOut,CircuitLeft,CircuitMiddle,CircuitRight,Title,CardImg,TextPart,TextTitle,TextText,Btn,SubTextPart,SubItem,SubTitle,SubText,MiddleBtn,TopImg,LeftImg,BottomImg,TopTitlePart,TopTitlePartTitle,TopTitlePartText, } from "./loop.style";

export default function CircuitContainer() {
    return (
        <>
        <TopTitlePart>
            <TopTitlePartTitle>
                Stake your earned CURRENT in the Loop to earn more AMP.
            </TopTitlePartTitle>
            <TopTitlePartText>
                STAKED CURRENT CAN ONLY BE WITHDRAWN AFTER 3 EPOCHS SINCE DEPOSIT.
            </TopTitlePartText>
        </TopTitlePart>
            <CircuitOut>
                <CircuitLeft>
                    <BottomImg src='img/loopbottom.svg' alt='' />
                    <LeftImg src='img/breakerleft.svg' alt='' />
                    <BsQuestionCircle className="questionmark"/>
                    <Title>AMP</Title>
                    <CardImg src='img/2.png' alt='' value="120px" draggable={false} />
                    <TextPart>
                        <TextTitle>00000000000</TextTitle>
                        <TextText>$00.0000000</TextText>
                    </TextPart>
                    <Btn bgcolor='#FF00BF'>Claim</Btn>
                </CircuitLeft>
                <CircuitMiddle>
                    <SubTextPart>
                        <SubItem>
                            <SubTitle>00:00:00</SubTitle>
                            <SubText>NEXT EPOCH</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000</SubTitle>
                            <SubText>CURRENT EPOCH</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000.00 FUSE</SubTitle>
                            <SubText>APR PRICE</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000%</SubTitle>
                            <SubText>APR</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>$000,000.00</SubTitle>
                            <SubText>TVL</SubText>
                        </SubItem>
                    </SubTextPart>
                    <MiddleBtn>Claim & Withdraw</MiddleBtn>
                </CircuitMiddle>
                <CircuitRight>
                    <TopImg src='img/looptop.svg' alt='' />
                    <Title>TOKEN/TOKEN LP</Title>
                    <CardImg src='img/twocircle.svg' value="150px" alt='' draggable={false} />
                    <TextPart>
                        <TextTitle>$00.000000</TextTitle>
                        <TextText>000000000 LP Staked</TextText>
                    </TextPart>
                    <Btn bgcolor='#9A00FF'>Stake</Btn>
                </CircuitRight>
            </CircuitOut>
        </>
    )
}
