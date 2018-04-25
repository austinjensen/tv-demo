import React, { Component } from 'react';
import './Viewshows.css';
import Show from '../Show'
import ReactPropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default class Viewshows extends Component {
    static ReactPropTypes = {
        allshows: ReactPropTypes.array.isRequired
    }
    rendershows = () => {

        const kidsMode = this.props.allshows.filter((show) => {
            return show.rating <= 3
        })

        return kidsMode.map((show, i) => {
            return <Show key={i} name={show.name} rating={show.rating} image={show.image} />
        })

    }
    render = () => {
        return (
            <main className="viewshows">
                <section className="availableshows">
                    <header><h3> availableshows</h3></header>
                    {this.rendershows()}
                    <Link to="/manageShows"> Manage shows</Link>
                </section>
                <section className="currentshows"> </section>
            </main>
        )
    }
}

