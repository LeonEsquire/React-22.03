import React from 'react';
import Postslist from 'components/Posts';

export default class Posts extends React.Component {
  render()
  {
    return(
      <div>
      {
          (!this.props.children) ?
          (<Postslist {...this.props.params}/>)
          :
          (this.props.children)
        }
      </div>
    );
  }
}