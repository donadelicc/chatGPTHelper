import React, { ReactNode, createContext, useContext, useState } from "react";
import InstructionsArray from '../defaultInstructions'

interface InstructionContextProps {
  instructionSets: InstructionSet[];
  setInstructionSets: React.Dispatch<React.SetStateAction<InstructionSet[]>>;
}

// Interface for individual instruction set
interface InstructionSet {
  header: string;
  category: string;
  Icon: ReactNode | undefined
  instruction: string[];
}


interface InstructionsProviderProps {
  children: React.ReactNode;
}

const InstructionsContext = createContext<InstructionContextProps | undefined>(undefined);

export const InstructionsProvider: React.FC<InstructionsProviderProps> = ({ children }) => {
  
  const [instructionSets, setInstructionSets] = useState(InstructionsArray);

  return (
    <InstructionsContext.Provider value={{ instructionSets, setInstructionSets }}>
      {children}
    </InstructionsContext.Provider>
  );
};


export const useInstructions = () => {
  const context = useContext(InstructionsContext);
  if (!context) {
    throw new Error("useInstructions must be used within a InstructionsProvider");
  }
  return context;
};
