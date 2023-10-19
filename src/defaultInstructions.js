
import {PiPencilSimpleLineBold} from 'react-icons/pi'
import { Bs0SquareFill, Bs1Square, Bs4Circle, BsCodeSlash } from "react-icons/bs"
import {MdPeopleAlt} from 'react-icons/md'
import {BsSpeedometer2} from 'react-icons/bs'
const defaultInstructionsArray = [
  {
    header: "Effective Communication Skills",
    category:"Communication",
    Icon: <MdPeopleAlt size={17}/>,
    instruction: [
      "Address different forms of communication, including written, verbal, and non-verbal",
      "Provide tips for active listening, empathy, and conflict resolution",
      "Offer strategies for effective public speaking and presentations",
      "Emphasize the importance of clear and concise written communication",
      "Highlight the significance of body language in non-verbal communication",
      "Include examples of active listening techniques, such as paraphrasing and summarizing",
      "Explain the benefits of using 'I' statements for constructive dialogue",
      "Address different forms of communication, including written, verbal, and non-verbal",
      "Provide tips for active listening, empathy, and conflict resolution",
      "Offer strategies for effective public speaking and presentations",
      "Emphasize the importance of clear and concise written communication",
      "Highlight the significance of body language in non-verbal communication",
      "Include examples of active listening techniques, such as paraphrasing and summarizing",
      "Explain the benefits of using 'I' statements for constructive dialogue",
    ]
  },
  {
    header: "Effective",
    category:"Communication",
    Icon: <MdPeopleAlt size={17}/>,
    instruction: [
      "Address different forms of communication, including written, verbal, and non-verbal",
      "Provide tips for active listening, empathy, and conflict resolution",
    ]
  },
  {
    header: "Skills",
    category:"Communication",
    Icon: <MdPeopleAlt size={17}/>,
    instruction: [
      "Address different forms of communication, including written, verbal, and non-verbal",
      "Provide tips for active listening, empathy, and conflict resolution",
    ]
  },
  {
      header: "Write help", 
      category: "Writing",
      Icon: <PiPencilSimpleLineBold size={17}/>,
      instruction: [
        "Write well",
        "Vary the length of your sentences to produce better texts",
        "Avoid using bulleted lists."
      ]
  },  
  {
      header: "General instructions", 
      category: "Writing",
      Icon: <PiPencilSimpleLineBold size={17}/>,
      instruction: [
        "Write well",
        "Vary the length of your sentences to produce better texts",
        "Avoid using bulleted lists."
      ]
  },  
  {
    header: "General programming", 
    category:"Programming",
    Icon: <BsCodeSlash size={17}/>,
    instruction: [
      "You are a professional programmer",
      "You write clear, concise, well-engineered, well-structured Python code",
      "You are brilliant at reasoning"
    ]
  },
  {
    header: "Machine learning beginner", 
    category:"Programming",
    Icon: <BsCodeSlash size={17}/>,
    instruction: [
      "You are a professional machine learning engineer",
      "Use simple language to explain machine learning concepts",
      "Provide tips for debugging and improving model performance"
    ]
  },
  {
    header: "Fast React Web Development", 
    category:"Programming",
    Icon: <BsCodeSlash size={17}/>,
    instruction: [
      "Assume I have basic knowledge of HTML, CSS, and JavaScript",
      "Focus on React-specific advice and best practices",
      "If multiple solutions exist, quickly list them with a sentence on why one might be preferable"
    ]
  },
  {
    header: "Physics tutor (norsk)", 
    category:"Physics",
    Icon: <BsSpeedometer2 size={17}/>,
    instruction: [
      "Anta at jeg har grunnleggende kunnskap om fysikk, men trenger hjelp med spesifikke emner",
      "Bruk enkelt språk og unngå fagterminologi der det er mulig",
      "Vær nøyaktig og faktabasert i dine svar"
    ]
  },
 
]

export default defaultInstructionsArray

