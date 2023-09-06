import React from "react";
import Header from './Header';
import Intro from './Intro';
import Portfolio from './Portfolio';
import Timeline from './Timeline';
import Feed from './Feed';
import Contact from './Contact';
import Footer from "./Footer";


export default function Home(){
    return (
        <>
            <Header />
            <Intro />
            <Portfolio />
            <Timeline />
            <Feed />
            <Contact />
            <Footer />
        </>
    );
}