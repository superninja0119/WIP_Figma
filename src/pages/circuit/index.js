import React from "react";
import { Link } from "react-router-dom";
import {BsQuestionCircle} from "react-icons/bs";
import { CircuitOut,CircuitLeft,CircuitMiddle,CircuitRight,Title,CardImg,TextPart,TextTitle,TextText,Btn,SubTextPart,SubItem,SubTitle,SubText,MiddleBtn,TopImg,LeftImg,BottomImg, } from "./ciruit.style";

export default function CircuitContainer() {
    return (
        <CircuitOut>
            <CircuitLeft>
                <BottomImg src='img/breakerbottom.svg' alt='' />
                <LeftImg src='img/breakerleft.svg' alt='' />
                <BsQuestionCircle className="questionmark"/>
                <Title>CURRENT</Title>
                <CardImg src='img/1.png' alt='' value="120px" draggable={false} />
                <TextPart>
                    <TextTitle>00000000000</TextTitle>
                    <TextText>$00.0000000</TextText>
                </TextPart>
                <Btn bgcolor='#FF00BF'>Claim</Btn>
            </CircuitLeft>
            <CircuitMiddle>
                <SubTextPart>
                    <SubItem>
                        <SubTitle>0000%</SubTitle>
                        <SubText>APR</SubText>
                    </SubItem>
                    <SubItem>
                        <SubTitle>0000%</SubTitle>
                        <SubText>DAILY APR</SubText>
                    </SubItem>
                    <SubItem>
                        <SubTitle>$000,000.00</SubTitle>
                        <SubText>TVL</SubText>
                    </SubItem>
                </SubTextPart>
                <MiddleBtn>Claim & Withdraw</MiddleBtn>
            </CircuitMiddle>
            <CircuitRight>
                <TopImg src='img/breakertop.svg' alt='' />
                <Title>TOKEN/TOKEN LP</Title>
                <CardImg src='img/twocircle.svg' value="150px" alt='' draggable={false} />
                <TextPart>
                    <TextTitle>$00.000000</TextTitle>
                    <TextText>000000000 LP Staked</TextText>
                </TextPart>
                <Btn bgcolor='#9A00FF'>Stake</Btn>
            </CircuitRight>
        </CircuitOut> 
    )
}
