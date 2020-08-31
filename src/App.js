import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Loader from "react-loader-spinner"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }
    componentDidMount = () => {
        setTimeout(() => this.setState({ loading: false }), 3000)
    }

    render() {
        return (
            <div className="App">
                {this.state.loading ? (
                    <Loader type="Puff" color="#00BFFF" height={100} width={100} />
                ) : (
                    <div>Hello</div>
                )}
            </div>
        )
    }
}

export default App
