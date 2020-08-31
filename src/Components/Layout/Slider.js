/* eslint-disable react/prop-types */
import React from 'react'

class Slider extends React.Component {
    render() {
        const { sprites } = this.props
        return (
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={sprites.front_default} />
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={sprites.back_default} />
                        <div className="caption left-align">
                            <h3>Left Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={sprites.front_shiny} />
                        <div className="caption right-align">
                            <h3>Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={sprites.back_shiny} />
                        <div className="caption center-align">
                            <h3>This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Slider