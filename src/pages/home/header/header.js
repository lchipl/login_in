import React from 'react';

import {SearchPanel} from './SearchPannel/searchPanel'
import {Filter} from './Filter/filter'
export const Header =() =>{
    return(
        <header>
            <Filter />
            <SearchPanel />
        </header>
    );
}