import React from 'react';
import PT from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const Work = ({ work }) => {
    if (!work) {
        return <noscript />;
    }
    const workRows = work ?
        work.map((elm, inc) => (
            <Row className="table-row" key={`work-row-${inc}`}>
                <Col xs="3">{elm.yearFrom} - {elm.yearTo}</Col>
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
            {workRows}
        </div>
    );
};

Work.propTypes = {};

export default Work;
