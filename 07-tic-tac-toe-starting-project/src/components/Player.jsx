import { useState } from "react"

export default function Player({ initialName, symbol }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        // setIsEditing(!isEditing); // => schedules a state update to true
        // setIsEditing(!isEditing); // 둘다 처음 값(false)을 true로 바꾸기만 함
        setIsEditing((editing) => !editing); // !isEditing은 상태 업데이트가 즉시 실행되지 않는 문제가 있음 
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let eidtablePlayerName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        eidtablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }

    return (
        <li>
        <span className="player">
            {eidtablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing? 'Save' : 'Edit'}</button>
      </li>
    )
}