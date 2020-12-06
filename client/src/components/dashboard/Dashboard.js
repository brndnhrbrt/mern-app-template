import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ auth: { user, loading } }) => {
    return (
        <div className="jumbotron">
            { !loading && user && (
                <div className="container">
                    <h1 className="display-3">Hello, {user.name}</h1>
                    <p>This is the dashboard</p>
                </div>
            )}
        </div>
    )
}

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
