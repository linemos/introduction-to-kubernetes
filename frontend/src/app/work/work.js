import React from 'react';
import PT from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const Work = ({ }) => {
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
        <div className="work">
            <Row>
                <h2>Work</h2>
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

Work.propTypes = {};

export default Work;
