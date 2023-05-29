import React,{useContext, useState} from 'react'
import './Playlist.css'
import { songContext } from './YoutubeContext'
import { useEffect } from 'react';

const PlayListRow = ({listItems, id}) => {

    const{subscriptions, handleActivate}=useContext(songContext)

return (
    <>
            <tr>
                <td>{listItems.id}</td>
                <td>{listItems.genre}</td>
                <td>
                {
                    subscriptions[id]?
                    <button id={id} onClick={(e)=>{handleActivate(e)}} style={{ padding:"10px", backgroundColor: 'green', color: 'white',fontSize: "20px", fontFamily:"cursive"}}>Unsubscribe</button> 
                    :
                    <button id={id} onClick={(e)=>{handleActivate(e)}}  style={{padding:"10px",backgroundColor: 'red', color: 'white',fontSize: "20px",fontFamily:"cursive"}} >Subscribe</button>
                }
                </td>
            </tr>


    </>
)
}

export default PlayListRow