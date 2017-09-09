import React from 'react';
import PT from 'prop-types';
import { Col, Grid, Row } from 'react-bootstrap';

const ContactInformation = ({ }) => {
    const name = 'Line';
    const location = 'Oslo';

    return (
        <Row className="contact-information">
            <Col xs="6">
                <p><b>Name: </b>{name}</p>
                <p><b>Location: </b>{location}</p>
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
