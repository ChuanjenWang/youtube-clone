import React from 'react';
import Comment from './comment';

const comments = (props) => {
    const loader = <div className="loader">Loading</div>; 
    const loaderx = <div className="loader-backdrop"><div className="loader">Loading</div></div>; 
    const sortPanelClass = props.showSort ? "comments__sortPanel" : "close";
    const commentsClass = props.reloading ? "comments" : "comments";

    let comments = props.items.length > 0 ? props.items.map(item => {
        return  <Comment 
                iconUrl={item.snippet.topLevelComment.snippet.authorProfileImageUrl} 
                authorName={item.snippet.topLevelComment.snippet.authorDisplayName} 
                updateDate={item.snippet.topLevelComment.snippet.updatedAt} 
                displayText={item.snippet.topLevelComment.snippet.textDisplay}
                likeCount={item.snippet.topLevelComment.snippet.likeCount}
                commentId={item.id}
                key={item.id}
            />  
    }) : loader ;
    
    return (
        <div className={commentsClass}>
            { props.reloading ? loaderx : null}
            <div className="comments__info">    
                <div className={ sortPanelClass }>
                    <ul>
                        <li onClick={() => props.switchSortHandler('relevance')}><span>Top comments</span></li>
                        <li onClick={() => props.switchSortHandler('time')}><span>Newest first</span></li>
                    </ul>
                </div>
                {props.total} Comments
                <span className="comments__sort" 
                      onClick={props.showSortHandler} 
                      onMouseOver={props.inSortBoxHandler}
                      onMouseOut={props.outSortBoxHandler}>
                    <ul>
                        <li>
                    <svg className="icon comments__sort__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 -2 20 20">
                    <title>sort</title>
                    <path d="M3 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM3 18v-2.016h6v2.016h-6z"></path>
                    </svg>
                        </li>
                        <li className="comments__sort__text">
                        SORT BY
                        </li>
                    </ul>
                </span>  
            </div>
            <div className="comments__body">
                {comments}
            </div>
        </div>
    )
}

export default comments;