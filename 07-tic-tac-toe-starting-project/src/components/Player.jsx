import { useState } from "react"

export default function Player({ name, symbol }) {
    const [ isEditing, setIsEditing ] = useState(false);

    function handleClick() {
        setIsEditing(!isEditing);
    }

    let playerContent = <span className="player-name">{name}</span>;

    if(isEditing) {
        playerContent = <input></input>;
    }

    return (
        <li>
        <span className="player">
            {playerContent}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>Edit</button>
      </li>
    )
}