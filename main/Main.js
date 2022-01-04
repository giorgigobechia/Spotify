import React from 'react'
import './main.css';
import { Row, Col } from 'antd';
import {SpotifyMiniCard} from 'spotifyCard/SpotifyMiniCard';
const style = { background: "#252525",borderRadius: "5px",height: "80px", display: "flex" };
const rowStyle = { margin: "0 auto", rowGap: "16px" }
const colStyle = { paddingRight: "5px"};

export default function Main() {
    return (
        <div>
        <Row gutter={22} style={rowStyle} >
        <Col className="gutter-row" span={6} style={colStyle}>
        <div  className="test" style={style}><SpotifyMiniCard 
        artistName={"King Von"}
        artistImage="https://i.scdn.co/image/ab6761610000f1785c0b2129a88c7d6ed0704556"/>
        </div>
        </Col>
        <Col className="gutter-row" span={6} style={colStyle}>
          <div style={style} className="test">
          <SpotifyMiniCard
          artistName="Tobias Dray"
          artistImage="https://i.scdn.co/image/ab67616d0000b273e6726cdfe25164288bbbae3d"
          /></div>
        </Col>
        <Col className="gutter-row" span={6} style={colStyle}>
          <div style={style}>
          <SpotifyMiniCard
          artistName="Central Cee"
          artistImage="https://i.scdn.co/image/ab6761610000e5eb1e44be3c67f3b853ee9ef824"
          />
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
        <div style={style}>
        <SpotifyMiniCard
        artistName="Lil Baby"
        artistImage="https://i.scdn.co/image/ab6761610000e5eb2161ef3bab0e5e922a1c297d"
        />
        </div>
      </Col>
      <Col className="gutter-row" span={6} style={colStyle}>
        <div style={style}>
        <SpotifyMiniCard
        artistName="Pop Smoke"
        artistImage="https://i.scdn.co/image/ab6761610000e5eb597f9edd2cd1a892d4412b09"
        />
        </div>
      </Col>
      <Col className="gutter-row" span={6} style={colStyle}>
        <div style={style}>
        <SpotifyMiniCard
        artistName="Tay k"
        artistImage="https://i.scdn.co/image/ab67616d0000b273fbfeb7ded12a79fbd98f99e8"
        />
        </div>
      </Col>
      <Col className="gutter-row" span={6} style={colStyle}>
        <div style={style}>
        <SpotifyMiniCard
        artistName="2pac"
        artistImage="https://i.scdn.co/image/e92cf49011e4c26f736cd479b0b64cb08f1b52c6"
        />
        </div>
      </Col>
      <Col className="gutter-row" span={6} >
        <div style={style}>
        <SpotifyMiniCard
        artistName="Eazy E"
        artistImage="https://i.iheart.com/v3/catalog/artist/30355946?ops=fit(720%2C720)"
        />
        </div>
      </Col>
      </Row>
        </div>
    )
}
