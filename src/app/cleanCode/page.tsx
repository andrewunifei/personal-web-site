import CleanCodeHeader from "./components/CleanCodeHeader"
import CleanCodeSection from "./components/CleanCodeSection"
import { Container, Box } from "@mui/material"

export default function Header() {
    return (
        <div className="bg-[#F5F5F5] pb-32">
            <Container maxWidth="xl" className="bg-[#F5F5F5]">    
                <CleanCodeHeader />
                <CleanCodeSection />
            </Container>  
        </div>       
    )
}