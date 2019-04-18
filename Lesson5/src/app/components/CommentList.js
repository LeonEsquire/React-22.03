import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }

  render()
  {
    if (!this.state.comment.length) {
      return <p>Загрузка</p>;
    } 

    let comment = this.state.comment.map((comment, index) => {
      return <Comment key={index} {...comment}/>
    })

    // Приделал фильтр - если компоненту передан пост, отобразятся только коментарии с соответствующим id

    if (this.props.post) {
      let id = this.props.post.id;
      comment = comment.filter((el)=>{        
        return el.props.postId == this.props.post.id
      })
    }

    return (
      <>
        <h1>Комментарии</h1>
        {comment}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments/')
    .then(response => {
      this.setState({comment: response.data})
    });
  }
}