import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';




export default class ItemList extends Component {
   

    
    state = {
        itemList: [],
        error: false
    }

    errorMessage = () => {
        this.setState({error: true})
    }

    componentDidMount() {
        const {getData, pageSize, pageNumb} = this.props
        //this.gotService.getAllCharacers()
        getData(pageSize, pageNumb)
            .then(itemList => {
                this.setState({itemList})
                
            })
            .catch(this.errorMessage)
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {url} = item;
            const id = url.substring(url.lastIndexOf('/')+1);
            const label = this.props.renderItem(item);
            return (
             <li 
                 onClick={()=>{this.props.onItemSelected(id)}}
                 key={url}
                 className="list-group-item"
                 >
                {/* <Link to={'books'+url.substring(url.lastIndexOf('/'))}>{label}</Link> */}
                {label}
             </li>
            )
         })
    }

    render() {
        const {itemList, error} = this.state;

        if (itemList === []) {
            return <Spinner/>
        }

        const lisOrError = error ? <ErrorMessage/> : this.renderItems(itemList)

        
        return (
            <ul className="item-list list-group">
                {lisOrError}
            </ul>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: ()=>{}
}

ItemList.PropTypes = {
    onItemSelected: PropTypes.func,
    
    // getData: PropTypes.arrayOf(PropTypes.object) //проверяем на массив объектов
}

