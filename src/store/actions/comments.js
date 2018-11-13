import * as actionTypes from '../actions/actionTypes';
import youtube from '../../utilities/youtube';

export const fetchComments = (id, nextPage, sort) => {
    console.log('action: fetchComments');
    
    return dispatch => {
        dispatch(fetchCommentsStart());
    
        const params = nextPage ? {
            type: 'comments',
            params: {                 
                part: 'snippet',
                pageToken: nextPage,
                videoId: id,
                order: sort
            } 
        }: {
            type: 'comments',
            params: { 
                part: 'snippet',
                videoId: id,
                order: sort
            }
        }
        youtube(params, (data) => {
            console.log(data);
            dispatch(fetchCommentsDetailSuccess(data));
        });
    }
}

export const fetchCommentsByOrder = (id, order) => {
    console.log('action fetchCommentsByOrder');
    return dispatch => {
        dispatch(fetchCommentsByOrderStart());
        const params = {
            type: 'comments',
            params: { 
                part: 'snippet',
                videoId: id,
                order: order
                }
            } 
        youtube(params, (data) => {
            console.log(data);
            dispatch(fetchCommentsOrderDetailSuccess(data));
        });
    }
}

export const fetchCommentsStart = () => {
    console.log('action fetchCommentsStart');
    return {
        type: actionTypes.FETCH_COMMENTS_START
    }   
}
export const fetchCommentsByOrderStart = () => {
    console.log('action fetchCommentsByOrderStart');
    return {
        type: actionTypes.FETCH_COMMENTS_ORDER_START
    }   
}

export const fetchCommentsDetailSuccess = (data) => {
    console.log('action fetchCommentsDetailSuccess');
    //console.log('next page token?:' + data.nextPageToken);
    return {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        list: data.items,
        nextPage: data.nextPageToken
    }
}

export const fetchCommentsOrderDetailSuccess = (data) => {
    console.log('action fetchCommentsByOrderDetailSuccess');
    //console.log('next page token?:' + data.nextPageToken);
    return {
        type: actionTypes.FETCH_COMMENTS_ORDER_SUCCESS,
        list: data.items,
        nextPage: data.nextPageToken
    }
}

export const clearComments = () => {
    return {
        type: actionTypes.CLEAR_COMMENTS
    }
}

export const switchSortBox = () => {
    return {
        type: actionTypes.SWITCH_SORT_BOX
    }
}
export const closeSortBox = () => {
    return {
        type: actionTypes.CLOSE_SORT_BOX
    }
}
export const inSortBox = () => {
    return {
        type: actionTypes.IN_SORT_BOX
    }
}
export const outSortBox = () => {
    return {
        type: actionTypes.OUT_SORT_BOX
    }
}

export const switchOrder = (id, order) => {
    return dispatch => {
        dispatch(setCommentsOrder(order));
        dispatch(fetchCommentsByOrder(id, order));
    }
}
export const setCommentsOrder = (params) => {
    return {
        type: actionTypes.SET_COMMENTS_ORDER,
        sort: params
    }
}