import CleanCodeHeader from "./components/CleanCodeHeader"
import { Container, Box } from "@mui/material"
import { GitHub, LinkedIn, X } from '@mui/icons-material';

export default function Header() {
    return (
        <Container maxWidth="lg">
            <Box className="flex justify-between items-center pt-10">
                <CleanCodeHeader />
                <Box  className="flex justify-around items-center w-32">
                    <GitHub />
                    <LinkedIn />
                    <X />
                </Box>
            </Box>
        </Container>        
    )
}