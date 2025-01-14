import CleanCodeHeader from "./components/CleanCodeHeader"
import CleanCodeSection from "./components/CleanCodeSection"
import { Container, Box } from "@mui/material"

export default function CleanCode() {
    return (
        <div className="bg-[#F5F5F5] px-8 pb-64">
            <Container maxWidth="xl" className="bg-[#F5F5F5] h-full">    
                <CleanCodeHeader />
                <CleanCodeSection />
                <CleanCodeSection />
            </Container>  
        </div>       
    )
}