import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAutocomplete from 'react-autocomplete';

import styles from './SearchBar.module.scss';
import * as actions from '../../../store/actions/index';
// import SearchSuggestions from './SearchSuggestions/SearchSuggestions';

class SearchBar extends Component {
    constructor (props) {
        super(props)
        this.state = {
          value: '',
        }
    }

    inputChangedHandler = (event) => {
        const searchTerm = event.target.value;
        this.props.onSearchStart(searchTerm);
        this.props.onFetchSuggestions(searchTerm);
    }

    searchClickedHandler = (event) => {
        event.preventDefault();
        this.props.onFetchVideos(this.props.term);
    }

    searchKeyPressHandler = (event) => {
        if(event.which === 13 || event.keyCode === 13) 
        {
            //this.props.searchTermChange(this.state.term);
            this.props.onFetchVideos(this.props.term);
        }
    }

    inputChangedHandler = (e) => {
        this.setState({ value: e.target.value });
        this.props.onSearchStart(e.target.value);
        this.props.onFetchSuggestions(e.target.value);
        //console.log(e.target.value);
    }
    selectSuggetionHandler = (value) => {
        this.setState({ value: value });
        this.props.onFetchVideos(this.props.term);
        //this.props.onSearchStart(value);
        //this.props.onFetchSuggestions(value);
    }

    render() {
        const InputProps = {
            placeholder: 'Search',
            style: {
                width: '100%'
            }
        };
        const wrapperStyle = {
            width: '40%',
            display: 'inline-block'
        };
        const menuStyle = {
            marginTop: '12px'
        }
        const data = this.props.suggestions ? 
                     this.props.suggestions.map((suggestion) => ({ id: suggestion, label: suggestion})) 
                     : {id: '', label: ''}
        
        return (
            <div>
                <div className={styles.searchBar}>
                    <div className={styles.searchBar__box}>
                        <ReactAutocomplete
                              items={data}
                              shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                              getItemValue={item => item.label}
                              renderItem={(item, highlighted) =>
                                <div
                                  key={item.id}
                                  style={{ backgroundColor: highlighted ? '#eee' : '#fff',
                                           lineHeight: '32px',
                                           fontSize:'16px',
                                           textAlign: 'left',
                                           paddingLeft: '10px'
                                }}
                                >
                                  {item.label}
                                </div>
                              }
                              inputProps={InputProps}
                              wrapperStyle={wrapperStyle}
                              menuStyle={menuStyle}
                              value={this.state.value}
                              onChange={e => this.inputChangedHandler(e)}
                              onSelect={value => this.selectSuggetionHandler(value)}
                            />
                        {/* <input 
                            type="text"
                            placeholder="Search" 
                            value={this.props.term}
                            onChange={ this.inputChangedHandler }
                            onKeyPress={(event) => this.searchKeyPressHandler(event)}
                            tabIndex="0"
                            aria-label="Search"
                            aria-autocomplete="list"
                            role="combobox"
                            aria-controls="ex1-listbox"
                            aria-expanded="true"  />  
                       */}

                        <button onClick={(event) => this.searchClickedHandler(event)}>
                            <svg className={styles.searchBar__icon} version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 2 20 20">
                            <title>magnifying-glass</title>
                            <path d="M17.545 15.467l-3.779-3.779c0.57-0.935 0.898-2.035 0.898-3.21 0-3.417-2.961-6.377-6.378-6.377s-6.186 2.769-6.186 6.186c0 3.416 2.961 6.377 6.377 6.377 1.137 0 2.2-0.309 3.115-0.844l3.799 3.801c0.372 0.371 0.975 0.371 1.346 0l0.943-0.943c0.371-0.371 0.236-0.84-0.135-1.211zM4.004 8.287c0-2.366 1.917-4.283 4.282-4.283s4.474 2.107 4.474 4.474c0 2.365-1.918 4.283-4.283 4.283s-4.473-2.109-4.473-4.474z"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <SearchSuggestions /> */}
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return {
        term: state.search.term,
        suggestions: state.search.suggestions
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchStart: (term) => dispatch(actions.searchStart(term)),
        onFetchSuggestions: (term) => dispatch(actions.fetchSuggestions(term)),
        onFetchVideos: (term) => dispatch(actions.fetchVideos(term)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);