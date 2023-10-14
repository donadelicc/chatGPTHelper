import {MdOutlineCelebration} from "react-icons/md"
import {AiOutlineUserAdd} from "react-icons/ai"
import {BsFillShareFill} from "react-icons/bs"
import { bgColor, linearGradients } from "./styles/colors"

export const tips = [
  {
    title: "Welcome to chatGPT helper", 
    icon: <MdOutlineCelebration color={bgColor.green}/>,
    tip: "This is a place where you can create, upload, store, and discover instructions."
  },  
  {
    title: "Create a user", 
    icon: <AiOutlineUserAdd color={bgColor.blue}/>,
    tip: "Please remember to create a user to fully enjoy the benefits. Once logged in, you`ll have the option to create custom instructions"
  },
  {
    title: "Share instructions", 
    icon: <BsFillShareFill color={bgColor.blue} />,
    tip: "When creating an instruction. Make it public so others can use it!"
  },
 
]

