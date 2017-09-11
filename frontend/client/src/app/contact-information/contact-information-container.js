import React, { Component } from 'react';
import PT from 'prop-types';
import { connect } from 'react-redux';
import ContactInformation from './contact-information';
import { getContactInformation } from '../../ducks/contact-information';

class ContactInformationContainer extends Component {
    componentWillMount() {
        this.props.getContactInformation();
    }
    render() {
        return <ContactInformation {...this.props} />;
    }
}

ContactInformationContainer.propTypes = {};

const mapStateToProps = state => (
    {
        contactInformation: state.contactInformation
    }
);

const mapDispatchToProps = {
    getContactInformation
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactInformationContainer);
