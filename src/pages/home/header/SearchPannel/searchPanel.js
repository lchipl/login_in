import React from 'react';

import {SearchHeader} from './SearchHeader/searchHeader'
import {SearchField} from './SearchField/searchField'
export const SearchPanel =()=>{
    return(
        <div>
            <SearchField />
            <SearchHeader />
            
        </div>
    )
}