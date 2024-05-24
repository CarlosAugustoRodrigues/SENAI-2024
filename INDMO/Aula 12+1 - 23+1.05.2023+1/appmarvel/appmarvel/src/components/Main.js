import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "b37550bb17463874d5e48a02da7c5a11";
const HASH = "624a14545ead277526d768563f1ed6f22faf6fef";

export const Main = () => {
    const [item, setItem] = useState([]);
    const [search, setSeatch] = useState("");

    const fetchCharaters = async (url) => {
        try {
            const response = await axios.get(url);
            setItem(response.data);
        } 
        catch(error) {
            console.error('Erro ao buscar dados', error);
        }
    };

    useEffect(() => {
        fetchCharaters(`${BASE_URL}?ts=${Date.now()}&apikey=${API_KEY}&hash=${HASH}`);
    }, []);

    const searchMarvel = async (e) => {
        if(e.key === "Enter") {
            const url = `${BASE_URL}?ts=${Date.now()}&apikey=${API_KEY}&hash=${HASH}&nameStartsWith=${search}`;
        }

    }

    return (
        <>
        <div className="header">
            <div className="bg">
                <img src="../../public/img/bg.gif" />
            </div>
            <br/>
            <div className="search-bar">
                <img className="logo" src="../../public/img/logo.png" />
                <p></p>
                <input 
                    type="search"
                    placeholder="Procurar Herói"
                    className="search"
                    onChange={(e) => setSeatch(e.target.value)}
                    onKeyDown={searchMarvel}
                />
            </div>
        </div>
        <div className="container">
            {!item.length ? <p>Não Encontrado</p> : <Card data={item} />}
        </div>
        </>
    )
}