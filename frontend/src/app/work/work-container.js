import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Work from './work';
import { getWorkExperience } from '../../ducks/work';

class WorkContainer extends Component {
    componentWillMount() {
        this.props.getWorkExperience();
    }
    render() {
        return <Work {...this.props} />;
    }
}

WorkContainer.propTypes = {};

const mapStateToProps = state => (
    {
        work: state.work.rows
    }
);

const mapDispatchToProps = {
    getWorkExperience
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkContainer);
