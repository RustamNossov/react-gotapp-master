import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotServise from '../../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import HideButton from '../hideButton/hideButton';
import RandomItem from '../randomItem';
 



export default class HousePage extends Component {
    
    state = {
        hidden: false,
        houseSelected: null,
        pageName:'house'
    }
    pageSize = 20; // кол-во элементов на странице pageSize * (pageNumb - 1) + 1
    pageNumb = 20;
    houseSelected = this.pageSize * (this.pageNumb - 1) + 1;
    gotService = new GotServise();

           
    onHouseSelected = (houseUrl) => {
        this.setState({
            houseSelected: houseUrl.substring(houseUrl.lastIndexOf('/')+1)
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
        let {houseSelected, pageName, hidden} = this.state;
             //houseSelected = houseSelected ? houseSelected : this.houseSelected;
        const itemList = (
            <ItemList onItemSelected={this.onHouseSelected}
                    getData={this.gotService.getAllHouses}
                    renderItem={(item)=>`${item.name}`}
                    pageSize={this.pageSize}
                    pageNumb={this.pageNumb}
            />
        )
        const houseDetails = (
            <ItemDetails 
                getData={this.gotService.getHouseById}
                itemId={houseSelected}
                pageName={pageName}
                >
                    
                <Field field='region' label='Region'/>
                <Field field='currentLord' label='Current Lord'/>
                <Field field='founder' label='Founder'/>
                <Field field='diedOut' label='Died Out'/>
            </ItemDetails>
        )
        const randomHouse= hidden ? null :(
            <RandomItem 
                minItemId={this.houseSelected}
                maxItemId={this.houseSelected+this.pageSize}
                getData={this.gotService.getHouseById}
                pageName={pageName}
                >
                <Field field='region' label='Region'/>
                <Field field='currentLord' label='Current Lord'/>
                <Field field='founder' label='Founder'/>
                <Field field='diedOut' label='Died Out'/>
            </RandomItem>
        )

        
        return (
            
            <div>
                    <RowBlock 
                        right={randomHouse}
                    />
                <HideButton
                    hideBtn={this.hideBtn}
                    part='House'
                />
                <RowBlock 
                    left={itemList}
                    right={houseDetails}
                />
            </div>
            
        )
    }
}
