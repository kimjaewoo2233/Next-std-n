import React from "react";
import Heading from "./_components/Heading";
import Heroes from "./_components/Heroes";
import Footer from "./_components/Footer";

const LandingPage = () => {
    return <div className="min-h-full flex flex-col">
        <div className="flex flex-col items-center justify-center text-center gap-y-8 px-6 pb-10 flex-1 md:justify-start">
            <Heading/>
            <Heroes/>
        </div>
        <Footer/>
    </div>
};

export default LandingPage;