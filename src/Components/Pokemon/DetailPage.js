/* eslint-disable react/prop-types */
import React from 'react'

class DetailPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const { id } = this.props.match.params; 
        // a props name match, in which it finds an object name params, in which there an ID
        const detailUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
        
        fetch(detailUrl) // expecting a promise, resolved / rejected
            .then(resp => { // resolved
                if (!resp.ok) throw new Error("Not 2xx response")
                else return resp.json() // returns another promise
            })
            .then(data => this.setState({ data: data }))
            .catch(err => console.log(err)) // rejected
    }

    render(){
        return(
            <div>
                {
                    this.state.data ? 
                    <div className="card">
                        <div className="card-image">
                            <img className="materialboxed" width="40" src={this.state.data.sprites.front_default}/>
                        </div>
                        <div className="card-title">
                            {this.state.data.name}
                        </div>
                        <div className="card-content">
                            Some description
                        </div>
                    </div> :
                    ''
                }
            </div>
        );
    }
}

export default DetailPage;