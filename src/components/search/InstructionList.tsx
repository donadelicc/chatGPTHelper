import React from 'react'
import { useInstructions } from '../../contexts/Global_Instructions';
import Instructions from '../sidebar/Instructions';
import InstructionItem from './InstructionItem';


const InstructionList = () => {

  const { instructionSets: instructions, setInstructionSets: setInstructions } = useInstructions();
  
  return (
    <div>
     {instructions.map((instruction) => (
      <InstructionItem header={instruction.header} instruction={instruction.instruction} />
     ))}
    </div>
  )
}

export default InstructionList
