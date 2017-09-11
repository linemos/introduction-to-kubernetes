import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Education from './education';
import { getEducation } from '../../ducks/education';

class EducationContainer extends Component {
    componentWillMount() {
        this.props.getEducation();
    }
    render() {
        return <Education {...this.props} />;
    }
}

EducationContainer.propTypes = {};

const mapStateToProps = state => (
    {
        education: state.education.rows
    }
);

const mapDispatchToProps = {
    getEducation
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
