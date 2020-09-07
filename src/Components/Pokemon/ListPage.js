import React from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'
import { connect } from 'react-redux'
import { getPokemons } from '../../store/actions/pokemonActions'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }    
    
    componentDidMount() {
        this.props.getPokemons();
    }

    render() {
        console.log(this.props.pokemons);
        return (
            <div>
                <div className="row">
                    { this.props.pokemons.map((pokemon, index) => <Card pokemon={pokemon} key={index} />) }
                </div>
                <div className="row">
                    <Pagination></Pagination>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        pokemons: state.pokemons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPokemons: () => {
            getPokemons(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);