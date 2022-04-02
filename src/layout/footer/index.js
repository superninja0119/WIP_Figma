import React from "react";
import { Link } from "react-router-dom";
import { LandOut,SocialIcons,SocialIconImg, } from "./footer.style";

export default function FooterContainer() {
    return (
        <LandOut>
                <SocialIcons>
                    <a href='https://discord.gg/moneytulip' target='_blank'>
                        <SocialIconImg src='img/discord.svg' alt='' draggable={false} />
                    </a>
                    <a href='https://t.me/moneytulip' target='_blank'>
                        <SocialIconImg src='img/telegram.svg' alt='' draggable={false} />
                    </a>
                    <a href='#'>
                        <SocialIconImg src='img/twitter.svg' alt='' draggable={false} />
                    </a>
                </SocialIcons>
        </LandOut> 
    )
}
