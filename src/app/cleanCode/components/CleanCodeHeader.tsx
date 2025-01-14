import { GitHub, LinkedIn, X } from '@mui/icons-material';
import { Box } from "@mui/material"

const externaLinks = {
    'github': "http://www.github.com/andrewunifei",
    'linkedin': "https://www.linkedin.com/in/andrew-enrique-oliveira-b6188b1a5/",
    'x': "https://x.com/address0x"
}

export default function CleanCodeHeader() {
    return (
        <Box className="flex justify-between items-center py-10">
            <h1 className="text-3xl font-helvetica">Resumo Clean Code</h1>
            <Box  className="flex justify-between items-center w-24">
                <a href={externaLinks['github']} target="_blank"><GitHub /></a>
                <a href={externaLinks['linkedin']} target="_blank"><LinkedIn /></a>
                <a href={externaLinks['x']} target="_blank"><X /></a>                    
            </Box>
        </Box>
    )
}