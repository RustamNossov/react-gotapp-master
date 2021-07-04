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

    getAllCharacers() {
        return this.getResource(`/characters?page=5&pageSize=20`)
    }

    getCaracterById(id) {
        return this.getResource(`/characters/${id}`)

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
}