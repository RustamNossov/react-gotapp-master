import React, {Component} from 'react';
import './randomItem.css';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';

export default class RandomItem extends Component {
   
    state = {
        item: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateItem();
        this.timerId = setInterval(this.updateItem, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onItemLoaded = (item) => {
        this.setState({ 
            item,
            loading: false 
        })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }

    updateItem = () => {
        const {getData, minItemId, maxItemId} = this.props
        const id =  this.getRandomInt(minItemId, maxItemId);
        getData(id)
            .then(this.onItemLoaded)
            .catch(this.onError)
    }

    render() {

        const {item, loading, error} = this.state;
        if (error) {
            return (
                <div className="random-block rounded">
                   <ErrorMessage/>
                 </div>
            )
        }
        
        const data = loading ? <Spinner/> : <Viev item = {item} pageName={this.props.pageName} props={this.props}/>

        return (
            <div className="random-block rounded">
               {data} {/*  <Viev item = {item}/> */}
            </div>
        );
    }
}

const Viev = ({item, pageName, props}) => {
    const {name} = item
    return (
        <div>
         <h4>{`Random ${pageName}`}: {name}</h4>
                <ul className="list-group list-group-flush">

                {
                        React.Children.map(props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }

                    {/* <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li> */}
                </ul>
        </div>
    )
}
