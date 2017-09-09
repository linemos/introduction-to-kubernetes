import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import Education from './education';

class EducationContainer extends Component {
    componentWillMount() {}
    render() {
        const { } = this.props;
        return (
            <div className="education-container">

            </div>
        );
    }
}

EducationContainer.propTypes = {};

const mapStateToProps = state => (
    {
        education: state.education
    }
);

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Education);
