class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }
  
  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        
      </div>
    )
  }
}

