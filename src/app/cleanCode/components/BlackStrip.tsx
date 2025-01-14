import { Container } from "@mui/material";

export default function BlackStrip() {
    return (
        <Container maxWidth="xl" className="bg-[#000] h-full py-12">   
            <p className="text-white text-8xl font-helvetica">Código Limpo</p> 
            <p className="text-white text-8xl font-helvetica">Clean Code</p> 
            <p className="text-white text-8xl font-helvetica">SOLID</p> 
            <p className="text-white text-8xl font-helvetica">Test Driven Development</p> 
        </Container>
    )
}