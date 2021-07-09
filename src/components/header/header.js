import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

export default class Header extends Component {
    
    render() {
        const {onSelectPage} = this.props
        return (
            <HeaderBlock>
                <HeaderTitle>
                    <Link to='/'>
                    Game of Thrones DB
                    </Link>
                </HeaderTitle>
                <HeaderLinks>
                    <li onClick={()=>{onSelectPage('characters')}}>
                        <Link to='/characters/'>Characters</Link>
                    </li>
                    <li onClick={()=>{onSelectPage('houses')}}>
                        <Link to='/houses/'>Houses</Link>
                    </li>
                    <li onClick={()=>{onSelectPage('books')}}>
                        <Link to='/books/'>Books</Link>   
                    </li>
                </HeaderLinks>
            </HeaderBlock>
        );
    }
    
};

//export default Header;