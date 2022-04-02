import React from "react";
import { Link } from "react-router-dom";
import { BtnOut,BtnLeft } from "./btn.style";

export default function BtnContainer({side,state}) {
    return (
        <BtnOut side={side} state={state}>
             <BtnLeft state={state}>{state ? "View" : "Closed"}</BtnLeft>
        </BtnOut> 
    )
}
