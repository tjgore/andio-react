import React, { Component } from 'react'
import Layout from './components/Layout/Layout'
import ScrollToTop from './components/Layout/ScrollToTop'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { initiate, loading } from './store/actions/actions'


class App extends Component {

	componentDidMount (props) {
    this.props.loading(true)
    this.props.onInit()
	}

  render() {
    return (
      <Router basename="/">
        <ScrollToTop>
          <Layout/>
        </ScrollToTop>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return {
		onInit: () => { dispatch(initiate()) },
    loading: (val) => { dispatch(loading(val)) }
	}
}

export default connect(null, mapDispatchToProps)(App);
