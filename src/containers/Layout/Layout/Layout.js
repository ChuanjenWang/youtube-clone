import React, { Component } from 'react';

import Header from '../../../components/Layout/Header/Header';
import styles from './Layout.module.scss';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler =() => {
        this.setState({ showSideDrawer: false})
        
    }
    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true })   
        
    }
    sideDrawerToggleHandler = () =>{
        this.setState((preState) => {
            return {showSideDrawer: !preState.showSideDrawer}
        })
    }
    
    render (){
        return (
            <div>
                <Header 
                    searchTermChange={term => this.props.searchTermChange(term)}
                    sideDrawerToggle={this.sideDrawerToggleHandler}
                    showSideDrawer={this.state.showSideDrawer}
                    closeSideDrawer={this.sideDrawerClosedHandler}
                  />
                <div className={styles.bodyWrap}>
                    <div className="container">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;  