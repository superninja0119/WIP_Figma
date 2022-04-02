import React from "react";
import { Link } from "react-router-dom";
import { LandOut,Title,LampImg,PricePart,PText,PL,RemainPart,RemainTitle,RemainValue,DepositPart,DepositInput,DepositBtn,ClaimPart,ClaimLineText,ClaimBtn } from "./presale.style";

export default function PresaleContainer() {
    return (
        <LandOut>
                <Title>
                    AMPERE<LampImg src='img/2.png' alt='' draggable={false}/>PRESALE
                </Title>
                <PricePart>
                    <PText><PL>$AMP price</PL><span/>0.0 $USDT</PText>
                    <PText><PL>$USDT raised</PL><span/>0.0 $USDT</PText>
                </PricePart>
                <RemainPart>
                    <RemainTitle>$AMP REMAINIG</RemainTitle>
                    <RemainValue>
                        <span className="text-color-yellow">00000</span>/
                        <span className="text-color-purple">0000000 AMP</span>
                    </RemainValue>
                </RemainPart>
                <DepositPart>
                    <DepositInput /><DepositBtn>Deposit</DepositBtn>
                </DepositPart>
                <ClaimPart>
                    <ClaimLineText>
                        <span>Claimable Tokens:</span>
                        <span>00000 AMP</span>
                    </ClaimLineText>
                    <ClaimLineText>
                        <span>Claimed Tokens:</span>
                        <span>00000 AMP</span>
                    </ClaimLineText>
                    <ClaimBtn>Claim</ClaimBtn>
                </ClaimPart>
        </LandOut> 
    )
}
