import React from 'react';
import PT from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

const ContactInformation = ({ contactInformation }) => {
    if (!contactInformation) {
        return <noscript />;
    }
    return (
        <Row className="contact-information">
            <Col xs="6">
                <p><b>Name: </b>{contactInformation.name}</p>
                <p><b>Location: </b>{contactInformation.location}</p>
            </Col>
            <Col xs="6">
                <img
                    src="https://storage.googleapis.com/vibbio/vibbio_round_logo.png"
                    className="contact-information-image"
                    role="presentation"
                />
            </Col>
        </Row>
    );
};

ContactInformation.propTypes = {};

export default ContactInformation;
