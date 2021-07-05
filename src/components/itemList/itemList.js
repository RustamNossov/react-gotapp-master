import React, {Component} from 'react';
import './itemList.css';
import GotServise from '../../services/gotService';

export default class ItemList extends Component {

    gotService = new GotServise();
    state = {
        listOfChar: [],
        error: false
    }

    errorMessage = () => {
        this.setState({error: true})
    }

    componentDidMount() {
        this.gotService.getAllCharacers()
            .then(res => {
                this.setState({listOfChar: res})
                
            })
            .catch(this.errorMessage)
    }

    render() {
        const {listOfChar, error} = this.state;
        console.log(listOfChar)
        let elements = null;
        if (!error) {
            elements = listOfChar.map((char) => {
                return (
                 <li key={char.url}
                     className="list-group-item">
                     {char.name}
                 </li>
                )
             })
        } else {
            const style = {
                width: '70%'
            }
            return (
                
                <ul className="item-list list-group">
                    <img style={style} src={process.env.PUBLIC_URL+'img/error.jpeg'} alt='error'></img>
                     <span>Something went wrong</span>

                </ul>
            )
        }
        
        return (
            <ul className="item-list list-group">
                {elements}
            </ul>
        );
    }
}