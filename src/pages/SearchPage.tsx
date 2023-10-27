import React, {ReactNode, useEffect, useState} from 'react'
import styles from '../styles/search/search.module.css'
import Header from '../components/search/Header'
import CategoryButton from '../components/search/CategoryButton'
import {BsCodeSlash} from 'react-icons/bs'
import {BiBookAlt} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {BiCategoryAlt} from 'react-icons/bi'
import {IoSettingsOutline} from 'react-icons/io5'
import InstructionList from '../components/search/InstructionList'
import { useInstructions } from '../contexts/Global_Instructions'


// inner custom categories
export const categoryArray = [
  { category: "Programming", 
    underCategories: [
      {
        title: "React",
        icon: <BsCodeSlash size={17}/>,
      },
      {
        title: "Web development",
        icon: <BsCodeSlash size={17}/>,
      },
      {
        title: "Software engineer",
        icon: <BsCodeSlash size={17} />, 
      },
      {
        title: "Debugging help",
        icon: <BsCodeSlash size={17} />, 
      },
      {
        title: "HTML basic",
        icon: <BsCodeSlash size={17} />, 
      },
      
    ]   
  },
  { category: "Writing", 
    underCategories: [
      {
        title: "Vocabulary helper",
        icon: <BiBookAlt size={17}/>,
      },
    ]   
  },
  { category: "Machine learning", 
    underCategories: [
      {
        title: "Machine learning beginner",
        icon: <IoSettingsOutline size={17}/>,
      },
      {
        title: "Machine learning advanced",
        icon: <IoSettingsOutline size={17}/>,
      },
    ]   
  },
  { category: "Something more", 
    underCategories: [
      {
        title: "Another one",
        icon: <BiCategoryAlt size={17}/>,
      },
      {
        title: "Tutankhamun",
        icon: <BiCategoryAlt size={17}/>,
      }
    ]   
  }
] 

interface Instruction {
  Icon: ReactNode | undefined
  category: string;
  header: string;
  instruction: string[];
}

const SearchPage = () => {

  const { instructionSets: instructions, setInstructionSets: setInstructions } = useInstructions();

  const [categories, setCategories] =  useState<string[]>([])
  const [userSearch, setUserSearch] = useState('');


  useEffect(() => {
    if(instructions){
      const newCategories = instructions.map(instruction => instruction.category)
      setCategories(newCategories)
    }
  }, [instructions])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUserSearch(e.target.value);
  }

  
  // Function to group an array of instructions by their category
  const groupByCategory = (array: Instruction[]): Record<string, Instruction[]> => {
    // The 'reduce' method is used to reduce the array to a single object
    // 'acc' (accumulator) is the object that will be returned
    // 'instruction' is each individual instruction object in the array
    return array.reduce((acc : Record<string, Instruction[]>, instruction: Instruction) => {
      // 'key' is the category of the instruction. We use this to group instructions.
      const key = instruction.category;
      // If the category does not already exist as a key in 'acc', create it and initialize with an empty array
      if (!acc[key]) {
        acc[key] = [];
      }
      // Push the current 'instruction' into the array corresponding to its category
      acc[key].push(instruction);
      // Return the updated 'acc' for the next iteration
      return acc;
    }, {} as Record<string, Instruction[]>);  // The initial value of 'acc' is an empty object
  };
  
  const groupedInstructions = groupByCategory(instructions)
  
  


  return (
    <div className={styles.wrapper}>
      <div className={styles.top__shadow}></div>
      <Header />
      <div className={styles.container}>
        {/* FILTER CONTAINER */}
        <div className={styles.filter__container}>
          <div className={styles.input__container}>
            <BsSearch className={styles.input__icon} size={14} />
            <input
              className={styles.filer__input}
              type="text"
              placeholder='Filter instruction by category'
              value={userSearch}
              onChange={(e) => handleSearch(e)}
            />
          </div>
         
          {Object.keys(groupedInstructions).length > 0 ? (
            Object.keys(groupedInstructions).map((category) => {
              // Define filteredInstructions, within the scope where 'category' is defined
              const filteredInstructions = groupedInstructions[category].filter(instruction =>
                instruction.header.toLowerCase().includes(userSearch.toLowerCase())
              );

              // Only render this category if there are instructions to show
              if (filteredInstructions.length > 0) {
                return (
                  <div className={styles.category__container} key={category}>
                    <h3 className={styles.category__title}>{category}</h3>
                    <div className={styles.categories}>
                      {filteredInstructions.map((instruction, index) => (
                        <CategoryButton label={instruction.header} Icon={instruction.Icon} key={index}/>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;  // Return null if no instructions to show for this category
            })
          ) : (
            <p>No categories available</p>
          )}
        <div>
      </div>

        </div>

        {/* OUTPUT */}
        <div className={styles.results__container}>
          <InstructionList/>
        </div>
      </div>
      <div className={styles.bottom__shadow}></div>
    </div>
  );
};

export default SearchPage;

