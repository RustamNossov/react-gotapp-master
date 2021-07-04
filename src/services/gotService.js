//import React, {Component} from 'react';

export default class GotServise {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }
    async getResource(url) { 
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Status ${res.status}`)
        }
       
        return await res.json()
    }

    async getAllCharacers() {
        const result = await this.getResource(`/characters?page=5&pageSize=20`);
        return result.map(this._transformCharacter);
    }

    async getCaracterById(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);

    }

    getAllHouses() {
        return this.getResource(`/houses`)
    }

    getHouseById(id) {
        return this.getResource(`/houses/${id}`)
    }

    getAllBooks() {
        return this.getResource(`/books`)
    }

    getBookById(id) {
        return this.getResource(`/books/${id}`)
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }


    _transformHouse(house){
        return {
            name: house.name,
            region: house.region,
            woreds: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            realised: book.realised
        }
    }
}