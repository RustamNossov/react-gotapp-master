//import React, {Component} from 'react';

export default class GotServise {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    getResource = async (url) => { 
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Status ${res.status}`)
        }
       
        return await res.json()
    }

    getAllCharacers = async (pageSize=10, pageNumb=10) => {
        const result = await this.getResource(`/characters?page=${pageNumb}&pageSize=${pageSize}`);
        return result.map(this._transformCharacter);
    }

    getCaracterById = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);

    }

    getAllHouses = async (pageSize=10, pageNumb=10) => {
        return this.getResource(`/houses?page=${pageNumb}&pageSize=${pageSize}`)
    }

    getHouseById = async (id) => {
        return this.getResource(`/houses/${id}`)
    }

    getAllBooks = async (pageSize=10, pageNumb=10) => {
        return this.getResource(`/books?page=${pageNumb}&pageSize=${pageSize}`)
    }

    getBookById  = async (id) => {
        return this.getResource(`/books/${id}`)
    }

    _transformCharacter = (char) => {
       
        return {
            url: char.url,
            name: char.name || 'unknown',
            gender: char.gender || 'unknown',
            born: char.born || 'unknown',
            died: char.died || 'unknown',
            culture: char.culture || 'unknown'
        }
    }


    _transformHouse = (house) => {
        return {
            name: house.name || 'unknown',
            region: house.region || 'unknown',
            woreds: house.words || 'unknown',
            titles: house.titles || 'unknown',
            overlord: house.overlord || 'unknown',
            ancestralWeapons: house.ancestralWeapons || 'unknown'
        }
    }

    _transformBook = (book) => {
        return {
            name: book.name || 'unknown',
            numberOfPages: book.numberOfPages || 'unknown',
            publisher: book.publisher || 'unknown',
            realised: book.realised || 'unknown'
        }
    }
}