import React from 'react'
import Loader from 'react-loader-spinner'
import NavigationBar from './Components/Layout/NavigationBar'
import ListPage from './Components/Pokemon/ListPage'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }
    componentDidMount(){
        setTimeout(() => this.setState({ loading: false }), 3000)
    }

    render() {
        return (
			<div className="App">
				<NavigationBar></NavigationBar>
				<div className="container">
					{this.state.loading ? (
						<Loader type="Puff" color="#00BFFF" height={100} width={100} />
					) : (
						<ListPage></ListPage>
					)}
				</div>
			</div>
        )
    }
}

export default App
