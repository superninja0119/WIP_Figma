import React from "react";
import { Link } from "react-router-dom";
import { CircuitOut,CircuitLeft,Title,Btn,SubTextPart,SubItem,SubTitle,SubText,LeftImg,InputGrp,DepositBtn,DepositInput,DepositPart,DepositTitle,SubDepostText,WithdrawBtnGrp,WithdrawBtn,LeftImg2,RightImg } from "./compounder.style";

export default function CompounderContainer() {
    return (
        <>
            <CircuitOut>
                <CircuitLeft>
                    <LeftImg src='img/compounder1.svg' alt='' />
                    <RightImg src='img/compounderbox.svg' alt='' />
                    <Title>TOKEN-TOKEN LP</Title>
                    <SubTextPart>
                        <SubItem>
                            <SubTitle>0.00 LP = $0.00</SubTitle>
                            <SubText>Deposited Balance</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>APY</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>DAILY</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>Autocomp TVL</SubText>
                        </SubItem>
                    </SubTextPart>
                    <InputGrp>
                        <DepositPart>
                             <DepositTitle>
                                Balance: <span>0.00000</span> TOKEN/TOKEN
                             </DepositTitle>
                             <DepositInput type='number' placeholder='5000'/>
                             <DepositBtn>Deposit</DepositBtn>
                             <SubDepostText>
                             You will receive AMP-X token as a receipt for your deposited AMP assets. The token is needed to withdraw your AMP.<br/>
                              Do not trade or transfer your AMP-X to strangers!
                             </SubDepostText>
                        </DepositPart>
                        <DepositPart>
                             <DepositTitle>
                                Balance: <span>0.00000</span> TOKEN/TOKEN
                             </DepositTitle>
                             <DepositInput type='number' placeholder='5000'/>
                             <WithdrawBtnGrp>
                                 <WithdrawBtn>Withdraw</WithdrawBtn>
                                 <WithdrawBtn>Withdraw All</WithdrawBtn>
                             </WithdrawBtnGrp>
                             <SubDepostText>
                             Deposit Fee: 0%, Withdrawal Fee: 0.1%<br/>
                             Withdrawal will Result in: Redeem Auto-X<br/>
                             for TOKEN/TOKEN
                             </SubDepostText>
                        </DepositPart>
                    </InputGrp>
                    <Btn bgcolor='#FF00BF'>Manual Compound</Btn>
                </CircuitLeft>
                <CircuitLeft>
                    <LeftImg2 src='img/compounder2.svg' alt='' />
                    <RightImg src='img/compounderbox.svg' alt='' />
                    <Title>TOKEN-TOKEN LP</Title>
                    <SubTextPart>
                        <SubItem>
                            <SubTitle>0.00 LP = $0.00</SubTitle>
                            <SubText>Deposited Balance</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>APY</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>DAILY</SubText>
                        </SubItem>
                        <SubItem>
                            <SubTitle>000000000</SubTitle>
                            <SubText>Autocomp TVL</SubText>
                        </SubItem>
                    </SubTextPart>
                    <InputGrp>
                        <DepositPart>
                             <DepositTitle>
                                Balance: <span>0.00000</span> TOKEN/TOKEN
                             </DepositTitle>
                             <DepositInput type='number' placeholder='5000'/>
                             <DepositBtn>Deposit</DepositBtn>
                             <SubDepostText>
                             You will receive AMP-X token as a receipt for your deposited AMP assets. The token is needed to withdraw your AMP.<br/>
                              Do not trade or transfer your AMP-X to strangers!
                             </SubDepostText>
                        </DepositPart>
                        <DepositPart>
                             <DepositTitle>
                                Balance: <span>0.00000</span> TOKEN/TOKEN
                             </DepositTitle>
                             <DepositInput type='number' placeholder='5000'/>
                             <WithdrawBtnGrp>
                                 <WithdrawBtn>Withdraw</WithdrawBtn>
                                 <WithdrawBtn>Withdraw All</WithdrawBtn>
                             </WithdrawBtnGrp>
                             <SubDepostText>
                             Deposit Fee: 0%, Withdrawal Fee: 0.1%<br/>
                             Withdrawal will Result in: Redeem Auto-X<br/>
                             for TOKEN/TOKEN
                             </SubDepostText>
                        </DepositPart>
                    </InputGrp>
                    <Btn bgcolor='#FF00BF'>Manual Compound</Btn>
                </CircuitLeft>
            </CircuitOut>
        </>
    )
}
