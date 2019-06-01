import React from 'react'
import './css/comment.css'


class AddNewComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    render() {
        return (<div id="newCommentSection">
                <p>Dodaj nowy komentarz</p>
                <form >
                    <textarea placeholder="Skomentuj"  style={{ height: 150, width:250 }} ></textarea><br/>
                    <button type="submit">Skomentuj</button>
                </form>
            </div>
        );
    }
}

export default AddNewComment;