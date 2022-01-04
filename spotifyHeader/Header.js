import {React,useState} from 'react';
import '../spotifyHeader/header.css'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdown } from 'react-icons/io';
import {Avatar, Button, Image} from "antd";
import Pop from 'popUp/Pop';

 const user = {
     name: "Giorgi Gobechia"
 }
 const correctName = user.name.replace(' ','.')
export default function Header() {
  const [modal,setModal] = useState(false)
  const showModal = () => {
      setModal(!modal)
  }
  console.log(modal);
    return (
        <div className="wrapper">
        <div className="header-left-side">
        <div className="header-left-side-box-first">
        <MdOutlineArrowBackIos style={{fill: 'white'}}/>
        </div>
        <div className="header-left-side-box-second">
        <MdOutlineArrowForwardIos style={{fill: 'white'}}/>
        </div>
        </div>
        <div className="user-wrapper" onClick={showModal}>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" className="user-photo"/>} />
        <span className="user-name">{correctName}</span>
        <IoMdArrowDropdown/>
        {
            modal ? <Pop/> : <span></span>
          }
        </div>
        </div>
    )
}
