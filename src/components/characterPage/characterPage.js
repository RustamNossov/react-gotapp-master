import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotServise from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import HideButton from '../hideButton/hideButton';
import RandomItem from '../randomItem';
 



export default class CharacterPage extends Component {
    
    state = {
        hidden: false,
        charSelected: null,
        pageName:'character'
    }
    pageSize = 20; // кол-во элементов на странице pageSize * (pageNumb - 1) + 1
    pageNumb = 20;
    charSelected = this.pageSize * (this.pageNumb - 1) + 1;
    gotService = new GotServise();

           
    onCharSelected = (charUrl) => {
        this.setState({
            charSelected: charUrl.substring(charUrl.lastIndexOf('/')+1)
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
        let {charSelected, pageName, hidden} = this.state;
             //charSelected = charSelected ? charSelected : this.charSelected;
        const itemList = (
            <ItemList onItemSelected={this.onCharSelected}
                    getData={this.gotService.getAllCharacers}
                    renderItem={(item)=>`${item.name} (${item.gender})`}
                    pageSize={this.pageSize}
                    pageNumb={this.pageNumb}
            />
        )
        const charDetails = (
            <ItemDetails 
                getData={this.gotService.getCaracterById}
                itemId={charSelected}
                pageName={pageName}
                >
                    
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        const randomChar= hidden ? null :(
            <RandomItem 
                minItemId={this.charSelected}
                maxItemId={this.charSelected+this.pageSize}
                getData={this.gotService.getCaracterById}
                pageName={pageName}
                interval={2000}
                >
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </RandomItem>
        )

        
        return (
            
            <div>
               
                    <RowBlock 
                        right={randomChar}
                    />
                <HideButton
                    hideBtn={this.hideBtn}
                    part='Character'
                />
                <RowBlock 
                    left={itemList}
                    right={charDetails}
                />
            </div>
            
        )
    }
}