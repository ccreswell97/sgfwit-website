import Header from "../components/header/header";
import AboutSection from "../components/aboutSection/aboutSection";

export default function About() {
    const sectionData = [
        {
            title: 'OUR GOAL',
            description: 'We are a community that is passionate about about technology and aim to support each other in our professional growth and development. We are dedicated to promoting diversity, equity, and inclusion in the tech industry and empowering everyone to pursue and thrive in careers in technology.',
            backgroundColor: 'white'
        },
        {
            title: 'WHO WE ARE',
            description: 'Members of the organization come from a variety of backgrounds and work in various areas of technology, including software engineering, product management, data science, cybersecurity, UX/UI, design, marketing, and more. We aim to provide a supportive community where members can connect with like-minded individuals, exchange ideas, and find mentorship and support as they navigate the challenges of working in the tech industry.',
            backgroundColor: '#F8DED2'
        },
        {
            title: 'WHAT WE DO',
            description: 'We host regular events and workshops that provide opportunities for members to network, learn new skills, and share experiences and knowledge. These events are designed to be inclusive and welcoming to women and gender minorities at all stages of their careers, from students and early-career professionals to seasoned veterans.',
            backgroundColor: 'white'
        }
    ];

    return (
        <div>
            <Header/>
            {sectionData.map(section => 
                <AboutSection title={section.title} description={section.description} backgroundColor={section.backgroundColor}/>
            )}
        </div>
    );
  }