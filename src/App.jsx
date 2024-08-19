import playerData from './playerData.js'
import { useState } from 'react'


const BaseballCard = ({name, team, position, stats, imgUrl, cardId}) => {
  let [showPicture, setShowPicture] = useState(true);

  const toggleCard = (e) => {
    setShowPicture(!showPicture);
  }

  if (showPicture) {
    return (
      <div onClick={toggleCard} className="card">
        <h2>{name}</h2>
        <img src={imgUrl} />
      </div>
    );
  } else {
    let statsDisplay = [];
  
    for (const stat in stats) {
      statsDisplay.push(<p>{stat}: {stats[stat]}</p>);
    }
    return (
      <div onClick={toggleCard} className="card">
        <h2>{name}</h2>
        <p>Team: {team}</p>
        <p>Position: {position}</p>
        {statsDisplay}
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
  <BaseballCard 
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    key={player.cardId}
    />
  ));
  
  return <>{cards}</>;
}

export default App;
