import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Work from './work';

class WorkContainer extends Component {
    componentWillMount() {}
    render() {
        const { } = this.props;
        return (
            <div className="work-container">

            </div>
        );
    }
}

WorkContainer.propTypes = {};

const mapStateToProps = state => (
    {
        work: state.work
    }
);

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Work);
