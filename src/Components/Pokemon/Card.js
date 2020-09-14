/* eslint-disable react/prop-types */
import React from "react"
import { Link } from "react-router-dom"

class Card extends React.Component {
    render() {
        const { name, url } = this.props.pokemon
        const id = url.split("/")[6]
        const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

        return (
            <div className="col s2 m2">
                <div className="card vetical">
                    <div className="card-image">
                        <img src={imgUrl} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p> {name} </p>
                        </div>
                        <div className="card-action">
                            <Link to={"/details/" + id}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
