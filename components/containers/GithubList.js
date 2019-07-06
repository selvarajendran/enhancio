import React, { Component } from 'react';
import GithubItem from "../presentational/GithubItem";

import RequestApi from '../../actions/RequestApi';
import { connect } from "react-redux";
import styled from 'styled-components';

const Error = styled.div`
  color: red;
`;

class GithubList extends Component {

    componentWillMount() {
        //this.props.store.subscribe(this.forceUpdate.bind(this));
        this.props.RequestApi();
    }

    render() {
        const { stateProps } = this.props;
        const status = stateProps.status;
        let component;
        if (status === "error") {
            component = (<Error>{JSON.stringify(stateProps.error)}</Error>);
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

const mapStateToProps = state => {
    return {
        stateProps: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        RequestApi: () => dispatch(RequestApi())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubList);