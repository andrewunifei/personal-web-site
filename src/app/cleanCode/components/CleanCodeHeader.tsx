import { GitHub, LinkedIn, X } from '@mui/icons-material';
import { Box } from "@mui/material"

export default function CleanCodeHeader() {
    return (
        <Box className="flex justify-between items-center py-10">
            <h1 className="text-3xl font-helvetica">Resumo Clean Code</h1>
            <Box  className="flex justify-around items-center w-32">
                <GitHub />
                <LinkedIn />
                <X />
            </Box>
        </Box>
    )
}