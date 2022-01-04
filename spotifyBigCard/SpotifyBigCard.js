import React from 'react'
import "./spotifyBigCard.css"

export class SpotifyBigCard extends React.Component {
  render(){
    return (
      <div>
      <div className="big-card-wrapper">
      <div className="big-card-content">
      <div className="big-card-content-photo-wrapper">
      <img className="big-card-content-photo"src={this.props.bigCardArtistImage}>
      </img>
      <div className="big-card-content-photo-artist">
      <p className="big-card-content-photo-artist-name">{this.props.bigCardArtistName}</p>
      </div>
      </div>
      <div className="big-card-content-info-wrapper">
      <span className="big-card-content-artist-name">{this.props.bigCardArtistName}  Mix</span>
      <p className="big-card-content-artist-descritption">{this.props.bigCardArtistDescription}</p>
      </div>
      </div>
      </div>
      </div>
  )
  }
}
