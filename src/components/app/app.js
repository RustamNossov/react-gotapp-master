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
import {BrowserRouter as Router, Route } from "react-router-dom";
import BooksItem from '../booksPage/booksItem';
import './app.css';
//import HideButton from '../hideButton/hideButton';




export default class App extends Component {
   
    state = {
        
        error: false,
        page: 'characters'
    }

    gotService = new GotServise();

           
    componentDidCatch() {
        this.setState({error: true})
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

        //const {hidden, page} = this.state;
        // let selectedPage ;
        // switch(page) {
        //     case 'characters':  
        //         selectedPage = <CharacterPage
        //                             hideBtn={this.hideBtn}
        //                             hidden={hidden}/>
        //     break
          
        //     case 'houses':  
        //         selectedPage = <HousePage
        //                             hideBtn={this.hideBtn}
        //                             hidden={hidden}/>
        //     break

        //     case 'books':  // if (x === 'value2')
        //         selectedPage = <BooksPage
        //                             hideBtn={this.hideBtn}
        //                             hidden={hidden}/>
        //     break
          
        //     default:
        //         selectedPage = <CharacterPage
        //                         hideBtn={this.hideBtn}
        //                         hidden={hidden}/>
        //         break
        //   }

        return (
            <Router>
                <div className="app"> 
                    <Container>
                        <Header onSelectPage={this.onSelectPage}/>
                    </Container>
                    <Container>
                        {/* {selectedPage} */}
                        <Route path='/characters'  component={CharacterPage}/>
                        <Route path='/houses'  component={HousePage}/>
                        <Route path='/books/' exact component={BooksPage}/>
                        <Route path='/books/:id' render={
                            ({match, location, history})=> {
                                console.log(match.params.id)
                                console.log(location)

                                console.log(history)

                                return <BooksItem bookId={match.params.id}/>    
                            }
                            }/>


                        {/* <CharacterPage
                            hideBtn={this.hideBtn}
                            hidden={hidden}/>

                        <BooksPage
                            hideBtn={this.hideBtn}
                            hidden={hidden}/>

                        <HousePage
                            hideBtn={this.hideBtn}
                            hidden={hidden}/> */}

                        
                    </Container>
                </div>
            </Router>
            
        );
    }

   
};

