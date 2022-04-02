import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/footer";
import { LandOut,TopTitle,TopPart,TopPartLeft,TitleMiddle,LampImg,TitleMiddleTop,TitleMiddleTopValue,TitleMiddleTopText,TopPartLeftTitle,ApproveBtn,TopPartLeftTextContainer,TopPartLeftTextLabel,TopPartLeftTextValue,AppOut,FooterContainer } from "./lyte.style";

export default function LyteContainer() {
    return (
        <>
            <LandOut>
                    <TopTitle>
                        LYTE REWARD BEGINS WHEN AMP IS OVER 1.10 FUSE.
                    </TopTitle>
                    <TopPart>
                        <TopPartLeft>
                            <TopPartLeftTitle>
                                PURCHASE LYTE
                            </TopPartLeftTitle>
                            <TopPartLeftTextContainer>
                                <TopPartLeftTextLabel>
                                    Epoch Supply:
                                </TopPartLeftTextLabel>
                                <TopPartLeftTextValue>
                                    0.000000
                                </TopPartLeftTextValue>
                            </TopPartLeftTextContainer>
                            <TopPartLeftTextContainer>
                                <TopPartLeftTextLabel>
                                    Puchase Amount:
                                </TopPartLeftTextLabel>
                                <TopPartLeftTextValue>
                                    0.000000
                                </TopPartLeftTextValue>
                            </TopPartLeftTextContainer>
                        </TopPartLeft>
                        <TitleMiddle>  
                            <TitleMiddleTop>
                                <TitleMiddleTopValue>0000</TitleMiddleTopValue>
                                <TitleMiddleTopText>LYTE<br/>PRICE</TitleMiddleTopText>
                            </TitleMiddleTop>
                            <LampImg src='img/3.png' alt='' draggable={false}/>
                            <TitleMiddleTop>
                                <TitleMiddleTopValue>0000</TitleMiddleTopValue>
                                <TitleMiddleTopText>LAST HOUR<br/>TWAP PRICE</TitleMiddleTopText>
                            </TitleMiddleTop>
                        </TitleMiddle>
                        <TopPartLeft>
                            <TopPartLeftTitle>
                                REDEEM LYTE for AMP
                            </TopPartLeftTitle>
                            <TopPartLeftTextContainer>
                                <TopPartLeftTextLabel>
                                    LYTE  Balance:
                                </TopPartLeftTextLabel>
                                <TopPartLeftTextValue>
                                    0.000000
                                </TopPartLeftTextValue>
                            </TopPartLeftTextContainer>
                            <TopPartLeftTextContainer>
                                <TopPartLeftTextLabel>
                                    Treasury Balance:
                                </TopPartLeftTextLabel>
                                <TopPartLeftTextValue>
                                    0.000000
                                </TopPartLeftTextValue>
                            </TopPartLeftTextContainer>
                            <AppOut>
                                <ApproveBtn>
                                    Approve
                                </ApproveBtn>
                            </AppOut>
                        </TopPartLeft>
                    </TopPart>
            </LandOut>
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    )
}
