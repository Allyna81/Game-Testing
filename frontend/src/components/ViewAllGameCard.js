import "./styles/style.css";
//import { Rating } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios'; 

const ViewAllGameCard = () => {
  const [results, setResults] = useState([]);
  const value = 4; 
  
  useEffect(()=> {
    axios({
         url: "https://salouacorsproxy.herokuapp.com/https://api.igdb.com/v4/games",
         method: 'POST',
         headers: {
             'Access-Control-Allow-Origin': '*',
             'Accept': 'application/json',
             'Client-ID': 'plbo27qmimbe14tlxxhdgobp10x6qv',
             'Authorization': 'Bearer o3j1a03faukeyjaxi9196xmydxd6lq',
         },
         data: `fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;`
       })
         .then(response => {
             setResults(response.data);
         })
         .catch(err => {
             console.error(err);
         });
});

const renderedResults = results.map((result) => {
return (
  <div className="viewall-game-card">
  <div className="viewall-img-card">
    <img src="https://picsum.photos/100/80" alt="game"/>
    </div>
    <div className="viewall-game-details">
    <span className="game-title">{result.name}</span>
    <div className="main-game-card-stars">
 <Rating name="read-only" value={value} readOnly size="small"/>
</div>
    <span className="game-platform">PS4</span>
    </div>
  </div>
);
});
return (
  <div className='result-ordered'>{renderedResults}</div>
)
};

  export default ViewAllGameCard;
