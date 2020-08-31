import React from 'react'
import { Redirect } from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmission = this.handleSubmission.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmission(e){
        e.preventDefault();
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
            <form className="right" onSubmit={this.handleSubmission}>
                { this.state.redirect ? <Redirect to={'/details/' + this.state.search}/> : '' }
                <div className="input-field">
                    <input id="search" type="search" onChange={this.handleChange} required />
                    <label className="label-icon" htmlFor="search">
                        <i className="material-icons">search</i>
                    </label>
                    <i className="material-icons">close</i>                
                </div>
                <input style={{marginLeft: "-99999px"}}className="btn waves-effect waves-light" type="submit" name="action"/>
            </form>
        )
    }
}

export default SearchBar;