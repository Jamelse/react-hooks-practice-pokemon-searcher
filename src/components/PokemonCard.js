import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [cardPosition, setCardPosition] = useState(true)
  const {name, hp, sprites} = pokemon

  function imageClickHandle(){
    setCardPosition((position) => !position)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
          <img  src={cardPosition ? sprites.front : sprites.back} onClick={imageClickHandle} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
