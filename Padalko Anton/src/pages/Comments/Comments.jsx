import React from 'react';
import Commentslist from 'components/Comments';

export default class Posts extends React.Component {
  render()
  {
  console.log('asdf')
    return(
      <div>
      {
          (!this.props.children) ?
          (<Commentslist/>)
          :
          (this.props.children)
        }
      </div>
    );
  }
}