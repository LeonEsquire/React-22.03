import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.userId));
  }

  render()
  {
    return(
      <div className="card border-secondary mb-3">
        <div className="card-header">
        <Link to={`/users/${this.props.id}`}>
          {this.props.username}
        </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{this.props.name}</p>
          <p>{this.props.email}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.website}</p>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched
  };
}

export default connect(mapStateToProps)(User);
