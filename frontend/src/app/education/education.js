import React from 'react';
import PT from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const Education = ({ }) => {
    const education = [
        {
            year_from: '2010',
            year_to: '2013',
            place: 'University of Oslo',
            comment: 'Bachelor\'s degree'
        },
        {
                year_from: '2013',
                year_to: '2015',
                place: 'University of Oslo',
                comment: 'Master\'s degree'
        }
    ];

    const educationRows = education ?
        education.map((elm) => (
            <Row className="table-row">
                <Col xs="3">{elm.year_from} - {elm.year_to}</Col>
                <Col xs="4">{elm.place}</Col>
                <Col xs="4">{elm.comment}</Col>
            </Row>
            )) :
            <norcript />;

    return (
        <div className="education">
            <Row>
                <h2>Education</h2>
            </Row>
            <Row className="table-header">
                <Col xs="3">Period</Col>
                <Col xs="4">Where</Col>
                <Col xs="4">Comment</Col>
            </Row>
            {educationRows}
        </div>
    );
};

Education.propTypes = {};

export default Education;
