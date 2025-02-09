"use client";

import React from "react";
import './Strawberryshake.css'
import { strawberrySection } from '../slices/content-description'

import Bottle from '../assets/strawberry-bottle.png'


export default function StrawberryShakeSection() {


    return (

        <>

        <section id="strawberry-section">

            <div id="descript" className="font-"><span>{strawberrySection.content}</span></div>
            <img id="bottle" src={Bottle} alt="Milkshake bottole" />
            

        </section>

        </>
    )


}