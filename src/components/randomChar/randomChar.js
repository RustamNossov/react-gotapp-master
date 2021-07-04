import React, {Component} from 'react';
import './randomChar.css';
import GotServise from '../../services/gotService';
import Spinner from '../spinner/spinner';

export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
    }

    gotService = new GotServise()

    state = {
        char: {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({ 
            char,
        loading: false })
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
        
    updateChar() {
        const id =  Math.floor(Math.random() * 140 + 25);
        this.gotService.getCaracterById(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        
        const {char, loading, error} = this.state;
       
        // if (loading) {
        //     return (
        //         <div className="random-block rounded">
        //             <Spinner/>
        //         </div>
        //     )
        // }
        

        if (error) {
            const style = {
                width: '100%',
                hight: '100%'
            }
            return (
                
                <div className="random-block rounded">
                    <img style={style} src={process.env.PUBLIC_URL+'img/error.jpeg'} alt='error'></img>
                     <span>Something went wrong</span>

                 </div>
            )
        }
        
        const spinner = loading ? <Spinner/> : <Viev char = {char}/>

        return (
            <div className="random-block rounded">
               {spinner} {/*  <Viev char = {char}/> */}
            </div>
        );
    }
}

const Viev = ({char}) => {
    const {name, gender, born, died, culture} = char
    return (
        <div>
         <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
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
                    </li>
                </ul>
        </div>
    )
}
