import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LandOut,LogoImg,Tabs,Tab } from "./header.style";

export default function LandContainer() {
    const [target, setTarget] = useState(1);
    return (
        <LandOut>
                <LogoImg src='img/underlogo.png' alt='' draggable={false} />
                <Tabs>
                    <Link to='/home'>
                        <Tab active={target === 1 && true} onClick={()=>setTarget(1)}>Home</Tab>
                    </Link>
                    <Link to='/circuit'>
                        <Tab active={target === 2 && true} onClick={()=>setTarget(2)}>Circuit </Tab>
                    </Link>
                    <Link to='/loop'>
                        <Tab active={target === 3 && true} onClick={()=>setTarget(3)}>Loop</Tab>
                    </Link>
                    <Link to='/lyte'>
                        <Tab active={target === 4 && true} onClick={()=>setTarget(4)}>Lyte</Tab>
                    </Link>
                    <Link to='/compounder'>
                        <Tab active={target === 5 && true} onClick={()=>setTarget(5)}>Compounder</Tab>
                    </Link>
                    <Link to='/under'>
                        <Tab active={target === 6 && true} onClick={()=>setTarget(6)}>Docs</Tab>
                    </Link>
                </Tabs> 
        </LandOut> 
    )
}
