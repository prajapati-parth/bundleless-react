const rc = React.createElement;

class VisitContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
  }

  incrementCounter(counter) {
    this.setState({
      counter: counter+1
    })
  }

  render() {
    return rc(
      'div',
      null,
      [
        rc(
          'h3',
          null,
          this.state.counter
        ),
        rc(
          'button',
          {onClick: () => this.incrementCounter(this.state.counter)},
          'I clicked here !!!'
        )
      ]
    );
  }
}

ReactDOM.render(
  rc(VisitContainer), document.getElementById('visit_container')
);