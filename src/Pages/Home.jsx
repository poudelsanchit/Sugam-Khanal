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
                    <Animator animation={batch(FadeUp)} className='w-11/12 flex flex-col l:flex-row  justify-between items-center'>
                        <div className='w-max flex flex-col text-5xl l:text-6xl lg:text-7xl font-Roboto font-bold  justify-center items-start'>
                            <p>HI,I'M</p>
                            <p>  SUGAM KHANAL </p>
                        </div>
                        <div className="flex flex-row w-96 justify-center">
                            <img src={MainPhoto} alt="" className='rounded-md w-3/5' />
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