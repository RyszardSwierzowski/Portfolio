import React from 'react'
import './css/comment.css'
import axios from "axios";
import {userId} from "../App";


class AddNewComment extends React.Component {
    constructor(props) {
        super(props);

        this.bindowanieFormularza = this.bindowanieFormularza.bind(this);

        this.state = {
            comment: ''

        };
    }


    dodajKomentarz =  () => {


        if (sessionStorage.getItem('userId'))
        {
            const odpowiedz =  axios.post('http://localhost:8080/api/comment', [
                {
                    "userID": sessionStorage.getItem("userId"),
                    "content": this.state.comment
                },
                {
                    "movieId":this.props.movieId
                }
            ]);
            alert([
                {
                    "userID": sessionStorage.getItem("userId"),
                    "content": this.state.comment
                },
                {
                    "movieId":this.props.match.params.movieId
                }
            ])

        } else {
            alert("Aby dodać komentarz musisz być zalogowany")
        }
    }

    bindowanieFormularza(event) {

        const target = event.target;
        const value = target.value;

        const state = {...this.state}

        state[target.name] = value;


        this.setState(state);
    }

    render() {
        return (<div id="newCommentSection">
                <form id="newCommentForm" onSubmit={this.dodajKomentarz}>
                    <textarea
                        id="textArea"
                        placeholder="Skomentuj"
                        style={{height: 100, width: 350}}
                        onChange={this.bindowanieFormularza}
                        name="comment"/>


                    <button id="commitButon" type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddNewComment;