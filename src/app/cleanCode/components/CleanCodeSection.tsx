import { Box, Paper, Divider } from "@mui/material"

export default function CleanCodeSection() {
    return (
        <Box className="flex">
            <Paper elevation={0} square={true} className="grow p-4">
                Testing
            </Paper>
            <Divider orientation="vertical" className="bg-[#B5B5B5]" flexItem/>
            <Paper elevation={0} square={true} className="grow p-4">
                Testing
            </Paper>
        </Box>
    )
}