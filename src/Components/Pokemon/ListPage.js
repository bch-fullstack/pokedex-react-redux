import React from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
            .then(resp => resp.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="row">
                    {
                        this.state.data ?
                        this.state.data.results.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) :
                        'Loading...'
                    }
                </div>
                <div className="row">
                    <Pagination></Pagination>
                </div>
            </div>
        )
    }
}

export default ListPage;