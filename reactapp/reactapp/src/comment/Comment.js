import React from 'react';
import './css/comment.css'


class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {
        return (
            <div id="comment">
                <div id='commentHeader'>
                    <div id="author">author : {this.props.author}</div>
                    <div id="date">date : {this.props.date}</div>
                </div>
                <div id="commentContent">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Comment;
