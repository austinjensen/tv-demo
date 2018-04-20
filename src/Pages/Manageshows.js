import React, { Component } from 'react'
import Show from '../Show'

export default class Manageshows extends Component {
    state = {
        show: {
            name: '',
            rating: 0,
            image: ''
        },
        shows: [
            {
                name: 'walkingdead',
                rating: 3,
                image: 'https://pbs.twimg.com/profile_images/956941358219931649/2rsLjOg-_400x400.jpg'
            }
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
        this.setState((previousState) => {
            const existingShows = previousState.shows
            existingShows.push({
                name: previousState.newShowName,
                rating: previousState.newShowRating,
                image: previousState.newPreviewImage
            })
            return {
                shows: existingShows
            }

        })
    }
    renderShows = () => {

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
        return this.state.shows.map((show, i) => {
            return(
                <Show key={i} name={show.name} rating={show.rating} image={show.image}/>
            )

        })

    }
    render() {
        return (
            <div>
                <section className="viewallshows">
                    <header><h1>All Shows</h1></header>
                    <div>
                        {this.renderShows()}
                    </div>
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