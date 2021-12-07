import React, { useState } from 'react'


const BoardList = ({boards}) => {

    

    return (
        <>
            <div className="board-list-container">
                <h1>Board List</h1>
                <p>I am the Board List..</p>
            </div>
        </>
    )

}

// const PirateList = ({pirates}) => {

// 	if (pirates.length === 0){
// 	  return (<p>Loading...</p>)
// 	}

// 	const piratesNodes = pirates.map((pirate, index) => {
// 	  return (
// 	    <li key={index} className="component-item">
// 	    <div className="component">
// 	    <Pirate pirate={pirate} />
// 	    </div>
// 	    </li>
// 	  )
// 	})

// 	return (
// 	  <ul className="component-list">
// 	    {piratesNodes}
// 	  </ul>
// 	)
// }

export default BoardList;

