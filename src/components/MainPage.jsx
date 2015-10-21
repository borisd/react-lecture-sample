import React, { Component } from 'react';
import { Grid, Col, Row, PageHeader } from 'react-bootstrap';

import NowPlaying from './NowPlaying.jsx';
import Playlist from './Playlist.jsx';

export default class MainPage extends Component {
  render() {
    return (
      <Grid fluid={ true }>
        <Row>
          <Col md={ 8 } mdOffset={ 2 }>
            <PageHeader>Team Play</PageHeader>

            <NowPlaying song={ this.props.world.playlist[this.props.world.nowPlaying] }></NowPlaying>

            <Playlist playlist={ this.props.world.playlist }></Playlist>
          </Col>
        </Row>
      </Grid>
    );
  }
}
