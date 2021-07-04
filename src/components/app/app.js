import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotServise from '../../services/gotService';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randomCharacter: {
                name: 'John',
                gender: 'male',
                born: '11.03.1039',
                died: '13.09.1089',
                culture: 'Anarchy'
            },
           

        };
        this.allCharacters = {};

        this.createCharactersList = this.createCharactersList.bind(this);
    }

    createCharactersList() {
        const got = new GotServise();
        let allCharactersFilled = [];
        
        got.getAllCharacers()
        .then(res => res.forEach(item=> allCharactersFilled.push(item) ) ) 

        this.allCharacters = allCharactersFilled;
    
    }

    randomCharacterChange() {
        
        this.setState(({randomCharacter}) => {
            const pers = this.allCharacters[this.getRandomInt(0, this.allCharacters.length)];
            console.log(pers.name.split(' ')[0])
            return {
                randomCharacter: {
                name: pers.name.split(' ')[0],
                gender: pers.gender,
                born: pers.born,
                died: pers.died,
                culture: pers.culture
            }
        }
        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }

    render() {
        this.createCharactersList()
       
        setTimeout(()=> this.randomCharacterChange(), 10000)
        
        const {randomCharacter} = this.state
        return (
            <div> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <RandomChar character={randomCharacter}/>
                        </Col>
                    </Row>
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

