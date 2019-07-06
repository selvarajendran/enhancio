import React, { Component } from 'react';
import GithubItem from "../presentational/GithubItem";

import RequestApi from '../../actions/RequestApi';

class GithubList extends Component {

    componentWillMount() {
        this.props.store.subscribe(this.forceUpdate.bind(this));
        this.props.store.dispatch(RequestApi());
    }
    
    render() {
        const stateProps = this.props.store.getState();
        const status = stateProps.status;
        let component;
        if (status === "error") {
            component = (<div className="error">{JSON.stringify(stateProps.error)}</div>);
        } else {
            component = (stateProps.users.map(user => {
                return <GithubItem key={user.id} {...user} />
            }));
        }
        return (
        <div> 
            {component}
        </div>
        );
    }
}

export default GithubList;