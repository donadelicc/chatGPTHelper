import React from 'react'
import { useInstructions } from '../../contexts/Global_Instructions';
import Instructions from '../sidebar/Instructions';
import InstructionItem from './InstructionItem';


const InstructionList = () => {

  const { instructionSets: instructions, setInstructionSets: setInstructions } = useInstructions();
  
  return (
    <div style={{display:"flex", flexDirection:"column", gap:10, height:"100%", overflow:"scroll"}}>
     {instructions.map((instruction) => (
      <InstructionItem header={instruction.header} instruction={instruction.instruction} />
     ))}
    </div>
  )
}

export default InstructionList
