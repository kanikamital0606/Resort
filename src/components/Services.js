import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './Title';

export default class Services extends Component {
    state={
        Services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:'Lorem  ipsum dolor sit '
            }
        ]
    }
    
    render() {
        return (
            <div>
                <Title title='Services' />
            </div>
        )
    }
}

