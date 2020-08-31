import React from 'react'
import Card from './Card'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then(resp => resp.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {
                    this.state.data ?
                    this.state.data.results.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                    'Loading...'
                }
            </div>
        )
    }
}

export default ListPage;