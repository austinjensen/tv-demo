import React, { Component } from 'react'
import Show from '../Show'
import ReactPropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default class Manageshows extends Component {
    static ReactPropTypes = {
        createShow: ReactPropTypes.func.isRequired
    }


    state = {
        show: {
            name: '',
            rating: 0,
            image: ''
        },
        shows: [

        ]

    }
    handleOnChange = (e) => {

        if (e.target.id === "nameinput")
            this.setState({
                newShowName: e.target.value
            })
        else if (e.target.id === "ratinginput")
            this.setState({
                newShowRating: Number(e.target.value)
            })
        else if (e.target.id === "imageinput")
            this.setState({
                newPreviewImage: e.target.value
            })
    }
    handleOnClick = () => {
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            image: this.state.newPreviewImage
        })
    }
    renderShows = () => {

        return this.props.allshows.map((show, i) => {
            return (
                <Show key={i} name={show.name} rating={show.rating} image={show.image} />
            )

        })

        // const showComponents = [
        // <Show key={1} name={this.state.shows[1].name} rating={this.state.shows[1].rating} image={this.state.shows[1].image} />
        // ]
        // for (const show of this.state.shows) {
        //     showComponents.push(
        //         <Show key={0} name={show.name} rating={show.rating} image={show.image} />

        //     )

        // }
        // for (let i = 0; i < this.state.shows.length; i++) {
        //     const show = this.state.shows[i];

        //     showComponents.push(
        //         <Show key={i} name={show.name} rating={show.rating} image={show.image}/>
        //     )
        // }

        // return showComponents
    }
    render() {
        return (
            <div className="manageshows">
                <section className="viewallshows">
                    <header><h1>All Shows</h1></header>
                    <div>
                        {this.renderShows()}
                    </div>
                    <Link to="/"> View Shows</Link>
                </section>

                <section className="createshow">
                    <header><h1>New show</h1></header>
                    <div>
                        <div><label>Name:</label><input id='nameinput' onChange={this.handleOnChange} /></div>
                        <div><label>Rating:</label><input id='ratinginput' onChange={this.handleOnChange} /></div>
                        <div><label>Preview Image:</label><input id='imageinput' onChange={this.handleOnChange} /></div>
                        <button onClick={this.handleOnClick}>Create</button>
                    </div>
                </section>
            </div>

        )
    }
}
//e=event value=string-always







