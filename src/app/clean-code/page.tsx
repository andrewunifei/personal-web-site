"use client"

import { useState, useEffect } from "react"
import BlackStrip from "./components/BlackStrip"
import CleanCodeHeader from "./components/CleanCodeHeader"
import CleanCodeSection from "./components/CleanCodeSection"
import { Container, Button, Box } from "@mui/material"
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function CleanCode() {
    const [isVisible, setIsVisible] = useState(false);
    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="bg-[#F5F5F5] px-8">
                <Container maxWidth="xl" className="bg-[#F5F5F5] h-full">    
                    <CleanCodeHeader />
                </Container>  
            </div>    
            <div className="bg-[#000] px-8">
                <BlackStrip />
            </div>
            <div className="bg-[#F5F5F5] px-8 pb-64 pt-10">        
                <Container maxWidth="xl" className="bg-[#F5F5F5] h-full">   
                    <CleanCodeSection />
                    <CleanCodeSection />
                </Container>      
            </div>
            <div    
                color="primary"
                className={`fixed bg-emerald-200 border rounded-md border-black bottom-0 right-0 px-2 py-2 mr-6 mb-[71px] z-50 flex scrollToTopButton ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
            >
                <ArrowUpwardIcon/>
            </div>
        </>      
    )
}