import React from 'react';
import PT from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const Education = ({ education }) => {
    if (!education) {
        return <noscript />;
    }
    console.log('Education: ', education);
    const educationRows = education ?
        education.map((elm, inc) => (
            <Row className="table-row" key={`education-row-${inc}`}>
                <Col xs="3">{elm.yearFrom} - {elm.yearTo}</Col>
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

Education.propTypes = {
    education: PT.arrayOf(PT.object)
};

export default Education;
