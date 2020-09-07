import React from 'react'
import Card from './Card'
import Pagination from '../Layout/Pagination'
import { connect } from 'react-redux'
import { initPokemon } from '../../store/actions/pokemonActions'

class ListPage extends React.Component { 
    componentDidMount() {
        this.props.initPokemon();
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
        initPokemon: () => {
            initPokemon(dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);