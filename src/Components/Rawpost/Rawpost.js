import React, { useEffect, useState } from 'react'
import './Rawpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../constants/constants'
import Youtube from 'react-youtube'

function Rawpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setMovies(response.data.results)
   }).catch(err=>{
   // alert('network error')
   })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
  
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })

  }
  return (

    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=> handleMovie(obj.id)} className= { props.isSmall ? 'small-poster':'posters-img'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      
        
      </div>
     { urlId && <Youtube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default Rawpost