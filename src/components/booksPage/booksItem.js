import React, { Component } from 'react';
import GotServise from '../../services/gotService';
import ItemDetails, {Field} from '../itemDetails';

export default class BooksItem extends Component {
    gotService = new GotServise();

    state = {
        
        pageName:'book'
    }

    render() {
        const {pageName} = this.state
        const {bookId} = this.props
        console.log(bookId)
        return (
            <ItemDetails 
                getData={this.gotService.getBookById}
                itemId={bookId}
                pageName={pageName}
                >
                    
                <Field field='authors' label='Authors'/>
                <Field field='publiser' label='Publiser'/>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}