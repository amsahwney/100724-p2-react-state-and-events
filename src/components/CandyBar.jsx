//a hook is hooked into some of the deeper processes that run react

import {useState} from 'react' //when using a hook you always need to import it

function CandyBar( { candy } ) {
const [likes, setLikes] = useState(0) //this is called a hook, a hook should not go in an if else state
    
    function handleLike() {
        setLikes(likes + 1)
      }


    return (
        <div>
            <h2>{ candy }</h2>
            <button onClick ={handleLike} >{likes} Likes</button>
        </div>
    )
}

export default CandyBar