"use client"

import './Hero.css'
import Bottle from '../assets/strawberry-bottle.png'

import React from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
export default function Hero() {

    useGSAP(() => {

        gsap.from('#title', {opacity: 0})
        gsap.to('#title', {opacity: 1, delay: 2})
        gsap.from('#slogan', {opacity: 0})
        gsap.to('#slogan', {opacity: 1, delay: 2.5})
        gsap.from('.btn-cta' , {opacity: 0})
        gsap.to('.btn-cta', {opacity: 1, delay: 3})

        gsap.from('#b', {opacity: 0})
        gsap.to('#b', {opacity: 1, delay: 4})
        gsap.from('#b-2', {opacity: 0})
        gsap.to('#b-2', {opacity: 1, delay: 4})
    })

    return(
        <>
        
        <div className="main">



        {/* Hero Tag */}
        <div id='title'>


            <h1>Ice</h1>
            <h1>Cream</h1>
            <h1>Man</h1>

        </div>

        


        {/* Slogan */}
        <section className='slogan-cta'>



            <div id='slogan'>
                <span>Whatever it is I gotta get it dsaf</span>
            </div>

            {/* Call to action */}

            



            <div className='btn-cta'>
                <span>Shop Now</span>
            </div>
        </section>



        <img id='b' src={Bottle} alt="Milkshake bottole" />
        <img id='b-2' src={Bottle} alt="Milkshake bottole" />

        </div>

        </>
    )



}