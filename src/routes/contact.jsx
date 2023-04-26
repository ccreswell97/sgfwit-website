import { Typography } from "@mui/material";
import Header from "../components/header/header";

export default function Contact() {
    return (
        <div>
            <Header/>
            <Typography fontSize={50} fontWeight={500}>CONTACT</Typography>
            <Typography fontSize={30} fontWeight={300}>
                Interested in getting involved?
            </Typography>
            <Typography fontSize={20} fontWeight={300}>
                We are currently seeking volunteers to join the leadership of Women in Tech.
            </Typography>
            <Typography fontSize={20} fontWeight={300}>
                Our group aims to empower and support women in the technology industry, providing a safe space for networking, learning, and sharing experiences. As a volunteer, you will have the opportunity to work with other driven women, gain valuable skills and experience, and make a positive impact on our community.            
            </Typography>
        </div>
    );
  }