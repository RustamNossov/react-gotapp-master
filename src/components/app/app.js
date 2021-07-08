import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import CharacterPage from '../characterPage/characterPage';
import CharDetails from '../itemDetails';
import Header from '../header';
import ItemList from '../itemList';
import RandomChar from '../randomItem';
import GotServise from '../../services/gotService';
import ErrorMessage from '../errorMessage/errorMessage';
import BooksPage from '../booksPage/booksPage';
import HousePage from '../housesPage/housesPage';
//import HideButton from '../hideButton/hideButton';




export default class App extends Component {
   
    state = {
        hidden: false,
        error: false,
        page: 'characters'
    }

    gotService = new GotServise();

           
    componentDidCatch() {
        this.setState({error: true})
    }

    hideBtn = () => {
        
        this.setState(({hidden}) => {
            return {
                hidden: !hidden
            }
        })
    }

    onSelectPage = (page) => {
        this.setState({page})
    }
    
   
    render() {
       

        if (this.state.error) {
            return (
                <ErrorMessage/>
            )
        }

        const {hidden, page} = this.state;
        let selectedPage ;
        switch(page) {
            case 'characters':  
                selectedPage = <CharacterPage
                                    hideBtn={this.hideBtn}
                                    hidden={hidden}/>
            break
          
            case 'houses':  
                selectedPage = <HousePage
                                    hideBtn={this.hideBtn}
                                    hidden={hidden}/>
            break

            case 'books':  // if (x === 'value2')
                selectedPage = <BooksPage
                                    hideBtn={this.hideBtn}
                                    hidden={hidden}/>
            break
          
            default:
                selectedPage = <CharacterPage
                                hideBtn={this.hideBtn}
                                hidden={hidden}/>
                break
          }

        return (
            <div> 
                <Container>
                    <Header onSelectPage={this.onSelectPage}/>
                </Container>
                <Container>
                    {selectedPage}
                    <CharacterPage
                        hideBtn={this.hideBtn}
                        hidden={hidden}/>

                    <BooksPage
                        hideBtn={this.hideBtn}
                        hidden={hidden}/>

                    <HousePage
                        hideBtn={this.hideBtn}
                        hidden={hidden}/>

                    
                </Container>
            </div>
        );
    }

   
};

