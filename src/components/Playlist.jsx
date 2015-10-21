import React, { Component } from 'react';
import { Panel, ListGroup } from 'react-bootstrap';

import AddSong from './AddSong.jsx';
import SongDetails from './SongDetails.jsx';

export default class Playlist extends Component {
  _renderPlaylist() {
    return this.props.playlist.map((song) => {
      return (
        <SongDetails key={ song.name } song={ song }></SongDetails>
      )
    });
  }

  render() {
    return (
      <Panel header='Main Playlist'>
        <ListGroup>
          { this._renderPlaylist.call(this) }
        </ListGroup>

        <AddSong></AddSong>
      </Panel>
    );
  }
}

Playlist.propTypes = {
  playlist: React.PropTypes.array.isRequired
};