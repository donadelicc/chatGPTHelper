import React, {ReactNode, useEffect, useState} from 'react'
import styles from '../styles/search/search.module.css'
import Header from '../components/search/Header'
import CategoryButton from '../components/search/CategoryButton'
import {BsCodeSlash} from 'react-icons/bs'
import {BiBookAlt} from 'react-icons/bi'
import {BsSearch} from 'react-icons/bs'
import {FaRobot} from 'react-icons/fa'
import {BiCategoryAlt} from 'react-icons/bi'

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
        icon: <FaRobot size={17}/>,
      },
      {
        title: "Machine learning advanced",
        icon: <FaRobot size={17}/>,
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
      },
    ]   
  }
] 



const SearchPage = () => {
  const [categories, setCategories] = useState(categoryArray);
  const [userSearch, setUserSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value);
  }

  const filteredCategories = categories.map(category => {
    const filteredUnderCategories = category.underCategories.filter(underCategory =>
      underCategory.title.toLowerCase().includes(userSearch.toLowerCase())
    );

    return {
      ...category,
      underCategories: filteredUnderCategories
    };
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Header />
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

          {/* Check if the array is empty */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map(category => (
              category.underCategories.length > 0 && (
              <div className={styles.category__container} key={category.category}>
                <h3 className={styles.category__title}>{category.category}</h3>
                <div className={styles.categories}>

                  {category.underCategories.map(underCategory => (
                    <CategoryButton key={underCategory.title} label={underCategory.title} Icon={underCategory.icon} />
                  )) }
                </div>
              </div>
              )
            ))
          ) : (
            <p>No categories available</p>
          )}
        </div>

        {/* OUTPUT */}
        <div></div>
      </div>
    </div>
  );
};

export default SearchPage;

