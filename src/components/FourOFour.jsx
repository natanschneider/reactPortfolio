import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function FourOFour(){
    return(
        <>
            <Header />
            <div className="grid justify-items-center">
                <h1>404 Not Found</h1>
                <p>Something went wrong!</p>
            </div>
            <Footer />
        </>
    )
}