import React, { ReactNode } from 'react'

interface InstructionProps {
    header: string;
    instruction: string[];
}
  
const InstructionItem: React.FunctionComponent<InstructionProps> = ({header}) => {
  return (
    <div>
        <h3>
            {header}
        </h3>
    </div>
  )
}

export default InstructionItem
