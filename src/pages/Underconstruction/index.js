import React from "react";
// import {DiscordSVG} from "../../assets/svg/svg";
import {UnderContain,UnderlogoImg,SoonText,SocialIconImg,SocialIcons,} from "./Under.style";

export default function UnderContainer() {
    return (
        <>
            <UnderContain>
                <UnderlogoImg src='img/underlogo.png' alt='' draggable={false} />
                <SoonText>coming soon</SoonText>
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
            </UnderContain>
        </>
    )
}
