import React, {Component} from 'react';
//import GotServise from '../../services/gotService';
import './itemDetails.css';
import Spinner from '../spinner/spinner';

const Field = ({item, field, label}) => {
    
    return (
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{label} </span>
                <span>{item[field]}</span>
            </li>
    )
}

export {Field}

export default class ItemDetails extends Component {
    

    state = {
        item: null,
        loading: true,
        error: false
    }

    onCharLoaded = () => {
        this.setState({ 
            loading: false 
        })
    }

    onCharLoading = () => {
        this.setState({ 
            loading: true 
        })
    }

    componentDidMount() {
        this.onCharLoading();
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.onCharLoading();
            this.updateChar();
        }
    }
    
    updateChar() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.onCharLoaded();
                this.setState({item})
            })
       // this.foo.bar=0;
    }

    render() {        
       if (this.state.loading) {
           return (
            <div className="char-details rounded">
                <Spinner/>
            </div>
           )
       }
        
        
        if (!this.state.item) {
            const {pageName} = this.props
            return <span className='select-error'>{`Select ${pageName}`}</span>
        }

        const{item}=this.state;
        const {name} = item   
       
        return (
             <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </div>
        );
    }
}