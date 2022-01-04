import React from 'react'
import "./miniCard.css"
import { GrPlay } from "react-icons/gr"


export class  SpotifyMiniCard extends React.Component {
  render(){
    return (
      <div className="mini-card-wrapper" style={{display: "flex",transition: "0.5s ease in out"}}>
        <div className="artist-image">
        <img  src={this.props.artistImage} style={{width: "100%",height: "100%",borderRadius: "5px 0px 0px 5px", backgroundSize: "cover",backgroundRepeat: "no-repeat"}}></img>
        </div>
        <p className="artist-name">{this.props.artistName}</p>
        <div className="play-circle"><GrPlay/></div>
      </div>
  )
  }
}
