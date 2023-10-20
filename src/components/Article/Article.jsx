import React, { useState } from 'react';

const Article = (props) => {
    const [visible, setVisible] = useState(false);
    function handelClick(){
        setVisible(!visible)    
    }
    return (
        <>
        <article>
            <h1>{props.titre}</h1>
            <button onClick={handelClick}>
               {visible === true ? "Masquer" : "Afficher"} 
            </button>   
            { visible && <p>{props.contenu}</p> }
        </article>
      </>
    )
  }
  
  export default Article