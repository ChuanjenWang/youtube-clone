import React from 'react';

import styles from './SideDrawer.module.scss';
import ToggleMenu from '../../../UI/ToggleMenu/ToggleMenu';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import NavigationItems from '../../../UI/Navigation/NavigationItems';

const sideDrawer = (props) => {
    let sideDrawerClass = [styles.sideDrawer, props.showSideDrawer ? styles.SideDrawerOpen : styles.SideDrawerClose];

    if(props.showSideDrawer) {
        //console.log('document.body.style.overflow = hidden');
        document.body.style.overflow = 'hidden';
    }else {
        //console.log('document.body.style.overflow = scrollbar');
        document.body.style = '';
    }
        
    return (
        <div>
            <Backdrop show={props.showSideDrawer} clicked={props.closeSideDrawer}/>
            <div className={ sideDrawerClass.join(' ') }>
                <div className={styles.sideDrawer__title}>
                    <div className={styles.sideDrawer__menu} onClick={props.sideDrawerToggle}>
                        <ToggleMenu />
                    </div>
                </div>
                <div>
                <NavigationItems clicked={props.closeSideDrawer} />
                </div>
            </div>

        </div>
    )
}

export default sideDrawer;