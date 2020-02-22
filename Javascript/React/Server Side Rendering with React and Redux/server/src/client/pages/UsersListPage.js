import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';

class UsersListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers(); // Because we're using react-router, if there navigate from another page (server loading data work when refresh the page), we need to fetch it
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        });
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        );
    }

    render() {
        return (
            <div>
                { this.head() }
                Here's a big list of users
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export { loadData };
export default {
    loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersListPage)
};