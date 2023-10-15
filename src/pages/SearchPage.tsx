import React from 'react'
import styles from '../styles/search/search.module.css'
import Header from '../components/search/Header'
import CategoryButton from '../components/search/CategoryButton'
import {BsCodeSlash} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import { bgColor } from '../styles/colors'

const SearchPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <Header />

        {/* FILTER CONTAINER */}
        <div className={styles.filter__container}>
          <div className={styles.input__container}>
            <BsSearch className={styles.input__icon} size={14}/>
            <input className={styles.filer__input} type="text" placeholder='Filter instruction by category' />
          </div>
          {/* FILTER ITEM */}
          <div className={styles.category__container}>
            <h3 className={styles.category__title}>Programming</h3>
            <div className={styles.categories}>
              <CategoryButton label='React' bgColor={bgColor.blue} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='Web development' bgColor={bgColor.green} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='Backend' bgColor={bgColor.orange} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='Software Development' bgColor={bgColor.red} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='JavaScript Expert' bgColor={bgColor.blue} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='Debugging help' bgColor={bgColor.orange} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='Code explainer' bgColor={bgColor.red} Icon={<BsCodeSlash size={17}/>}/>
              <CategoryButton label='HTML basic' bgColor={bgColor.green} Icon={<BsCodeSlash size={17}/>}/>
            </div>
          </div>

          

        </div>

        {/* OUTPUT */}
        <div>

        </div>
      </div>

    </div>
  )
}

export default SearchPage
