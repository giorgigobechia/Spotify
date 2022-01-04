import React from 'react'
import { SpotifyBigCard } from 'spotifyBigCard/SpotifyBigCard';
import { Row, Col, Divider } from 'antd';

const style = { background: '#272727', height: "270px", display: "flex",borderRadius: "2px 2px 2px 2px"};
export default function ContentMiddleMain() {
    return (
        <div>
        <Row gutter={24}>
        <Col className="gutter-row" span={4}>
          <div style={style}><SpotifyBigCard 
           bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
           bigCardArtistName={"Giorgi Gobechia"}
           bigCardArtistDescription={"polo g,shonski,Giorgi and more"}
           />
           </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}><SpotifyBigCard 
          bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
          bigCardArtistName={"Giorgi Gobechia"}
          bigCardArtistDescription={"polo g,shonski,Giorgi and more"}/></div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}><SpotifyBigCard
          bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
          bigCardArtistName={"Giorgi Gobechia"}
          bigCardArtistDescription={"polo g,shonski,Giorgi and more"}
          /></div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}><SpotifyBigCard
          bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
          bigCardArtistName={"Giorgi Gobechia"}
          bigCardArtistDescription={"polo g,shonski,Giorgi and more"}
          /></div>
        </Col>
        <Col className="gutter-row" span={4}>
        <div style={style}><SpotifyBigCard
        bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
        bigCardArtistName={"Giorgi Gobechia"}
        bigCardArtistDescription={"polo g,shonski,Giorgi and more"}
        /></div>
      </Col>
      <Col className="gutter-row" span={4}>
      <div style={style}><SpotifyBigCard
      bigCardArtistImage={"https://thumbs.dreamstime.com/b/aerial-night-view-slum-ipanema-neighborhood-rio-de-janeiro-two-different-realities-brazilian-people-rocinha-leblon-154357446.jpg"} 
      bigCardArtistName={"Giorgi Gobechia"}
      bigCardArtistDescription={"polo g,shonski,Giorgi and more"}
      /></div>
    </Col>
      </Row>
        </div>
    )
}
