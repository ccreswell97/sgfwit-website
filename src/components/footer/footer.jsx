import { Box, Typography } from "@mui/material";
import './footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <Box>
                <Typography>Meetup</Typography>
                <Typography>Contact Us</Typography>
                <Typography>Volunteer</Typography>
            </Box>
        </div>
    )
}