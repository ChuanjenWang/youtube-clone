import React from 'react';

import styles from './Header.module.scss';
import SearchBar from  '../../../containers/UI/SearchBar/SearchBar';
import SideDrawer from '../Header/SideDrawer/SideDrawer';
import ToggleMenu from '../../UI/ToggleMenu/ToggleMenu';

const header = (props) => {
    
    return (
        <div className={styles.header}>
            <ToggleMenu 
                sideDrawerToggle={props.sideDrawerToggle} 
                />
            <SideDrawer 
                sideDrawerToggle={props.sideDrawerToggle}
                showSideDrawer={props.showSideDrawer}
                closeSideDrawer={props.closeSideDrawer}
             />
            <SearchBar searchTermChange={term => props.searchTermChange(term)} />
        </div>
    )
}

export default header;