import React, {useContext} from 'react'
import Store from '../contex/AppContex'
import classes from '../styles/styles.module.css'
const FilterContainer = () => {
    const appCtx = useContext(Store)
    const filterHandler = () =>{
        appCtx.filterHandler()
    }
    return (
        <>
        <div className = {classes.container}>
            <div className = {classes['search-container']}>
                <label htmlFor = 'searchString'>Find by Company Name: </label>
                <input 
                    name = 'searchString' 
                    type = 'text' 
                    placeholder = 'ex. Zippia'
                    className = {classes['search-input']}
                    onChange = {appCtx.searchItemHandler}
                />
            </div>
            <div className = {classes['date-filter']}>
                <button onClick = {filterHandler}>{appCtx.isFilter? 'Remove Filter':'Show New Post Only'}</button>
           </div>
        </div>
        </>
    )
}

export default FilterContainer
