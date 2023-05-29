import React from 'react'
import playlists from './list'
import PlayListRow from './PlayListRow'
import './Playlist.css'
import YoutubeContext from './YoutubeContext'
import SongRow from './SongRow'

const PlayList = () => {
return (
    <YoutubeContext>

        <h1 className="head" style={{textAlign: 'center'}}>PlayList</h1>   
        <table>
            <tbody>
            <tr>
                <th>S.No</th>
                <th>Playlists</th>
                <th>Subscription</th>
            </tr>
                {playlists.map((item,index)=>{
                    return(
                        <PlayListRow key={index} id={index} listItems={item}/>
                    )
                })}
            </tbody>
        </table>

        <br />
        <SongRow />
        </YoutubeContext>
)
}

export default PlayList