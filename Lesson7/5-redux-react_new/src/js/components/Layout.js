import React from "react";
import { connect } from 'react-redux';

import { fetchUser } from '../actions/userActions';
import { fetchTweets } from '../actions/tweetsActions';

class Layout extends React.Component {
  
  componentDidMount() {
    this.props.dispatch(fetchUser())
  }
  
  fetchTweets() {
    this.props.dispatch(fetchTweets());
  }
  
  render() {
    const {user, tweets} = this.props
    if(!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>Загрузить твиты</button>
    }
    const mappedTweets = tweets.map((tweet, index) => <li key={index}>{tweet.text}</li>)

    return <div>
      <h1>{user.name}</h1>;
      <ul>{mappedTweets}</ul>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched,
    tweets: state.tweets.tweets
  };
}

export default connect(mapStateToProps)(Layout);