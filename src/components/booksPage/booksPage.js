import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotServise from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import HideButton from '../hideButton/hideButton';
import RandomItem from '../randomItem';
 



export default class BooksPage extends Component {
    
    state = {
        hidden: false,
        bookSelected: null,
        pageName:'book'
    }
    pageSize = 10; // кол-во элементов на странице pageSize * (pageNumb - 1) + 1
    pageNumb = 1;
    bookSelected = this.pageSize * (this.pageNumb - 1) + 1;
    gotService = new GotServise();
       
    onBookSelected = (bookUrl) => {
        this.setState({
            bookSelected: bookUrl.substring(bookUrl.lastIndexOf('/')+1)
        })
        
    }

    hideBtn = () => {
        this.setState(({hidden}) => {
            return {
                hidden: !hidden
            }
        })
    }

    
    render() {

        let {bookSelected, pageName, hidden} = this.state;
             //bookSelected = bookSelected ? bookSelected : this.bookSelected;
        const itemList = (
            <ItemList onItemSelected={this.onBookSelected}
                    getData={this.gotService.getAllBooks}
                    renderItem={(item)=>`${item.name} (${item.authors})`}
                    pageSize={this.pageSize}
                    pageNumb={this.pageNumb}
            />
        )
        const bookDetails = (
            <ItemDetails 
                getData={this.gotService.getBookById}
                itemId={bookSelected}
                pageName={pageName}
                >
                    
                <Field field='authors' label='Authors'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        console.log(hidden)
        const randomBook = hidden ? null : (
            <RandomItem 
                minItemId={this.bookSelected}
                maxItemId={this.bookSelected+this.pageSize}
                getData={this.gotService.getBookById}
                pageName={pageName}
                >
                <Field field='authors' label='Authors'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released'/>
            </RandomItem>
        )
        
        return (
            
            <div>
                    <RowBlock 
                        right={randomBook}
                    />
                <HideButton
                    hideBtn={this.hideBtn}
                    part='Book'
                />
                <RowBlock 
                    left={itemList}
                    right={bookDetails}
                />
            </div>
            
        )
    }
}