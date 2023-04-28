import './App.css'

import Header from './components/header/header';
import { Box, Typography } from '@mui/material';
import Section from './components/section/section';
import EventCard from './components/eventCard/eventCard';

function App() {

  const eventData = [
    {
      title: 'Career Panels',
      content: "Listen to tech professionals answer your questions about interviewing, pay negotiation, what it's like to work in the tech industry, and more!",
    },
    {
      title: 'Job Series',
      content: 'Learn from experts in the field as they teach you what goes into their jobs. Topics include design, user research, engineering, marketing, and others.',
    },
    {
      title: 'Coffee and Collab',
      content: 'Bring your laptop and join us for social and networking opportunities while you sip a drink and work on a project at a local coffee shop.'
    },
    {
      title: 'Project Share & Tells',
      content: 'Hear from different individuals as they talk about the details of a project that they recently completed. This could be a work or personal project.'
    },
  ];

  return (
      <div className='App'>
        <Header/>
        <Box className='about-section' flexDirection={"column"} sx={{backgroundColor: 'white', minHeight: '70vh'}}>
            <Typography fontSize={42} fontWeight={600}>According to a survey by Women Tech Network, women hold only 28% of jobs in the tech industry</Typography>
            <Typography fontSize={30} fontWeight={300}>This lack of representation can have significant consequences, including limited opportunities for women in the industry, a lack of diverse perspectives and ideas, and a perpetuation of gender biases and stereotypes. That’s why we are committed to addressing these issues and promoting greater diversity and inclusion in tech, as well as fostering a sense of community and empowerment across the board.</Typography>
        </Box>
        <Box className='event-section' sx={{backgroundColor: '#F8DED2', minHeight: '65vh'}}>
          <Typography fontSize={36} fontWeight={600} className='title'>We have events for everyone</Typography>
          <Box className='card-wrapper'>
            {eventData.map(eventContent =>
                <EventCard title={eventContent.title} content={eventContent.content}/>
            )}
          </Box>
        </Box>
        <Section color={'white'} height={'75vh'}/>
        <Section color={'primary'} height={'25vh'}/>
      </div>
  )
}

export default App;
