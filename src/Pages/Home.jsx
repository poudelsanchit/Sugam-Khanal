import React from 'react';
import MainPhoto from '../assets/logo.jpg';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <>
            <ScrollContainer className="bg-bg-dark text-text-primary">

                <ScrollPage >
                    <Animator animation={batch(FadeUp)} className='w-full flex flex-col   justify-center items-center gap-10'>
                       <div className='w-9/12 flex gap-10 flex-col sm:flex-row'>
                         <div className='w-full sm:w-1/2  flex flex-col sm:flex-col  sm:text-7xl  gap-3  text-4xl  font-Roboto font-bold  justify-center items-start'>
                            <span>HI,I'M</span> 
                            <span>SUGAM KHANAL </span>
                        </div>
                        <div className="flex flex-row sm:w-1/2  w-full justify-center">
                            <img src={MainPhoto} alt="" className='rounded-md w-full  object-cover sm:w-8/12' />
                        </div>
                        </div>
                       
                    </Animator>
                </ScrollPage>
{/* 
                <ScrollPage className='bg-text-secondary'>
                    <Animator animation={batch(Fade(), ZoomIn())}>
                        <span style={{ fontSize: "40px" }}>Done</span>
                        <br />
                        <span style={{ fontSize: "30px" }}>
                            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                        </span>
                    </Animator>
                </ScrollPage> */}

            </ScrollContainer>
        </>
    );
}

export default Home