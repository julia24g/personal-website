import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SingleProject from './SingleProject';

const projectData = [
  {
    title: "Electrical and Computer Engineering Department @ Western University",
    repo: "Solar Alone Multi-objective Advisor Web Tool",
    github: "",
    devpost: "",
    award: "",
    languages: ["python", "react"],
    description: ""
  },
  {
    title: "Hack the North @ UWaterloo",
    repo: "Robotany",
    github: "https://github.com/Dissonant101/robotany",
    devpost: "https://devpost.com/software/the-plant-whisperer",
    award: "Finalist",
    languages: ["python", "rust"],
    description: "We saw an opportunity to use LLMs to allow for better understanding of big, sensor-based data. As a proof of concept, we collected data on soil moisture and sunlight for house plants and allowed the user to talk to the data collected through a chatbot."
  },
  {
    title: 'Borealis AI: Let’s Solve It Mentorship Program',
    repo: 'Remove Radon',
    github: 'https://github.com/kMongru/canadian_radon_analysis',
    devpost: '',
    award: '',
    languages: ['aws', 'docker', 'python'],
    description: 'Health Canada estimates 7% of Canadian homes have unsafe yet preventable radon levels, which can cause lung cancer. Remove Radon is a tool we created during a 2-month program with Borealis AI and RBC that helps people assess their radon exposure and make those insights actionable.'
  },
  {
    title: 'New Venture Project @ Ivey Business School',
    repo: 'Verified Luxury Authentics',
    github: 'https://github.com/NVP-Devs/product_verification',
    devpost: '',
    award: 'Stephen Suske Award for Best New Venture Project',
    languages: ['javascript', 'html', 'css'],
    description: 'In the second-hand luxury goods market, 20% of consumers are defrauded into purchasing a counterfeit product. Over a year, my team and I developed and implemented the business idea for VLA, a service that enables buyers to verify the good’s ownership history on a blockchain before purchasing.'
  },
  {
    title: 'Electrical and Computer Engineering Department @ Western University',
    repo: 'Solar Energy Virtual Net Metering',
    github: 'https://github.com/julia24g/virtual-net-metering',
    devpost: '',
    award: '',
    languages: ['python', 'solidity', 'truffle', 'node.js', 'javascript'],
    description: 'As more communities are transitioning to clean energy, there are some inefficiencies when managing the energy created. For the past 6 months, I have been researching and developing a system that can distribute energy between peers automatically on a ledger to increase cost and energy savings.'
  },
  {
    title: 'CS3307 Object-Oriented Design and Analysis @ Western University',
    repo: 'Raspberry Pi Smart Home Hub',
    github: '',
    devpost: '',
    award: '',
    languages: ['c++', 'qt'],
    description: 'For a 4-month school project, my team and I created a Raspberry Pi Smart Home Hub that contains useful information for the day. I worked on the back-end of the bus widget that allows a user to see when their next bus to school or work is coming.'
  },
  {
    title: 'R. U. Hacking? Hackathon @ Reading University, UK',
    repo: 'SafeCred',
    github: 'https://github.com/julia24g/ruhackathon',
    devpost: 'https://devpost.com/software/safecred',
    award: 'Best Blockchain Hack',
    languages: ['c', 'rust'],
    description: 'When the COVID-19 vaccines were first introduced, people were concerned about the authentication of vaccine passports. In a 24 hour hackathon, my team and I created SafeCred to create and verify the authenticity of COVID-19 vaccine records.'
  },
  {
    title: 'SheHacks V @ Western University',
    repo: 'Helping Hands',
    github: 'https://github.com/disha-prashar/SheHacksV_HederaHack',
    devpost: 'https://devpost.com/software/helping-hands-82nm06',
    award: 'Third Best Hack Overall',
    languages: ['java', 'gradle', 'html', 'css'],
    description: 'The unfortunate reality of donating to charity is that you don’t know where your money is being spent or if it’s going towards the cause at all. In a 48 hour hackathon, my team and I designed and implemented Helping Hands to let donators track exactly where their dollars go.'
  },
  {
    title: 'HackWestern7 @ Western University',
    repo: 'Explore myCity',
    github: 'https://github.com/nivedabala/explore_london',
    devpost: 'https://devpost.com/software/explore-mycity',
    award: 'Best Machine Learning Hack',
    languages: ['python', 'javascript', 'html', 'css'],
    description: 'With COVID-19 forcing many public spaces to close, people were spending time outdoors more than ever. In a 48 hour hackathon, my team and I made a web app called Explore myCity that generated paths for London locals to explore areas of their city they may not have visited otherwise.'
  }
]

const Projects = () => (
  <div className="projects">
    <h2>Projects</h2>
    <Carousel>
      {projectData.map((project, index) => (
        <Carousel.Item key={index}>
          <SingleProject project={project} />
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default Projects;
