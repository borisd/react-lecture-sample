import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import SongDetails from './SongDetails.jsx';

export default class NowPlaying extends Component {
  render() {
    return (
      <Panel header='Now Playing'>
        <SongDetails song={ this.props.song }></SongDetails>
      </Panel>
    );
  }
}

NowPlaying.propTypes = {
  song: React.PropTypes.object.isRequired
};