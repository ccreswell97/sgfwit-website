import { Box, Typography } from "@mui/material";
import './aboutSection.css'

export default function AboutSection({title, description, backgroundColor}) {
    return (
        <Box className='about-section' flexDirection={"column"} sx={{backgroundColor: {backgroundColor}}}>
            <Typography fontSize={50} fontWeight={500}>{title}</Typography>
            <Typography fontSize={36} fontWeight={300}>{description}</Typography>
        </Box>
    )
}