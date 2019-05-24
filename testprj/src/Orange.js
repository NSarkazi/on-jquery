import React from 'react';

class Orange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isReady: true };
  }

  render() {
    return <div>Orange</div>
  }
}

export default Orange;