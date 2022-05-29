import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state={
        hasError:''
    }
    static getDerivedStateFromError(error) {
        return {hasError:error}
    }
  render() {
    if (this.state.hasError!=='')
        return (
        <h1>something wrong</h1>
        )
    return this.props.children
  }
}
