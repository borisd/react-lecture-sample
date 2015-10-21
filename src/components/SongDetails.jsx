import React, { Component } from 'react';
import { Row, Col, Thumbnail } from 'react-bootstrap';

export default class SongDetails extends Component {
  render() {
    if (!this.props.song.data) {
      return (<div>Loading.. { this.props.song.name }</div>);
    }

    return (
      <Row>
        <Col md={4}>
          <Thumbnail bsSize="xs" alt={ this.props.song.data.title } src={ this.props.song.data.thumbnail_url } />
        </Col>

        <Col md={8}>
          <h3>{ this.props.song.data.title }</h3>
          <small>- <a href={ this.props.song.data.author_url } target="_blank">{ this.props.song.data.author_name }</a></small>
        </Col>
      </Row>      
    );
  }
}

SongDetails.propTypes = {
  song: React.PropTypes.object.isRequired
};