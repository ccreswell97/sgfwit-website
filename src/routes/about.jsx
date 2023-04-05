import { Box, Typography } from "@mui/material";
import Header from "../components/header/header";

export default function About() {
    return (
        <div>
            <Header/>
            <Box className='main-content' flexDirection={"column"}>
                <Typography fontSize={50} fontWeight={500}>OUR GOAL</Typography>
                <Typography fontSize={36} fontWeight={300}>
                    We are a community that is passionate about about technology and aim to support each other in our professional growth and development. We are dedicated to promoting diversity, equity, and inclusion in the tech industry and empowering everyone to pursue and thrive in careers in technology.
                </Typography>
            </Box>
            <Box className='main-content' flexDirection={"column"}>
                <Typography fontSize={50} fontWeight={500}>WHO WE ARE</Typography>
                <Typography fontSize={36} fontWeight={300}>
                    Members of the organization come from a variety of backgrounds and work in various areas of technology, including software engineering, product management, data science, cybersecurity, UX/UI, design, marketing, and more. We aim to provide a supportive community where members can connect with like-minded individuals, exchange ideas, and find mentorship and support as they navigate the challenges of working in the tech industry.
                </Typography>
            </Box>
            <Box className='main-content' flexDirection={"column"}>
                <Typography fontSize={50} fontWeight={500}>WHAT WE DO</Typography>
                <Typography fontSize={36} fontWeight={300}>
                    We host regular events and workshops that provide opportunities for members to network, learn new skills, and share experiences and knowledge. These events are designed to be inclusive and welcoming to women and gender minorities at all stages of their careers, from students and early-career professionals to seasoned veterans.
                </Typography>
            </Box>
        </div>
    );
  }