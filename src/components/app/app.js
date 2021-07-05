import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';


export default class App extends Component {
    constructor() {
        super()
    }
    
    state = {
        hidden: false
    }
           
    hideBtn = () => {
        this.setState(({hidden}) => {
            return {
                hidden: !hidden
            }
        })
    }
        

    render() {

        const {hidden} = this.state;
        const randomCharBlock = hidden ? null : <RandomChar/>;
        return (
            <div> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharBlock}
                            {/* <RandomChar/> */}
                        </Col>
                    </Row>
                    <button 
                        onClick={this.hideBtn}
                        className='hideButton'
                        >Hide Random Char</button>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

   
};

