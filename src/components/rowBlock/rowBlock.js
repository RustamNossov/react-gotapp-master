import React from 'react';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {

    if (left) { 
        return (
            <Row>
                <Col md='6'>
                    {left}
                </Col>
                <Col md='6'>
                    {right}
                </Col>
            </Row>
         )
    } else {
        return (
            <Row>
                <Col lg={{size: 6, offset: 0}}>
                    {right}
                </Col>
            </Row>
         )
    }
    
}
export default RowBlock;

