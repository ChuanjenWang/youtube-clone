import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './SearchSuggestions.module.scss';
import * as actions from '../../../../store/actions/index';

class SearchSuggestions extends Component {

    componentDidMount() {
        window.addEventListener("click", this.closeSuggestionHandler, false);
    }
    componentWillUnmount() {
        window.removeEventListener("click", this.closeSuggestionHandler, false);
    }
   
    inSuggestionsHandler = () => {
        this.props.onInSuggestions();
    }
    outSuggestionsHandler = () => {
        this.props.onOutSuggestions();
    }
    closeSuggestionHandler = () => {
        //console.log('close');
        //console.log('this.props.in:' + this.props.in);
        //console.log('this.props.show:' + this.props.show);
        if(!this.props.in && this.props.show) {
            this.props.onCloseSuggestions();
        }
    }
    selectSuggestionsHandler = (term) => {
        this.props.onSearchStart(term);
        this.props.onFetchVideos(term);
        this.props.onCloseSuggestions();
        //console.log('select suggestion:' + term);
    }

    render () {
        let suggestions = null;
        const suggestionsClass = styles.close;
        //this.props.show ? styles.searchSuggestions : styles.close;
        
        // if(this.props.suggestions) {
        //     suggestions = this.props.suggestions.map((item, key) => <li key={key} 
        //     onClick={() => this.selectSuggestionsHandler(item)}
        //     aria-posinset={key} 
        //     role="option"
        //     aria-selected="false"
        //     >{item}</li>)
        // }
        return (
            <div className={suggestionsClass} 
                 onMouseOver={this.inSuggestionsHandler} 
                 onMouseOut={this.outSuggestionsHandler}>
                 <ul id="ex1-listbox" role="listbox">
                    {suggestions}
                 </ul>
            </div> 
        )
    }
}

const mapStateToProps = state => {
    return {
        suggestions: state.search.suggestions,
        show: state.search.showSuggestions,
        in: state.search.inSuggestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseSuggestions: () => dispatch(actions.closeSuggestions()),
        onInSuggestions: () => dispatch(actions.inSuggestions()),
        onOutSuggestions: () => dispatch(actions.outSuggestions()),
        onSearchStart: (term) => dispatch(actions.searchStart(term)),
        onFetchVideos: (term) => dispatch(actions.fetchVideos(term)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchSuggestions);