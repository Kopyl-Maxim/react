import React, {useEffect} from "react";

const TitleInput = (spells) => {
  if (spells.length<0) {
    return (
      <div>Loading..</div>
    )
  } else {
    return (
      <div>
        {spells.map(item => {
          return item.title
        })}
      </div>
    )
  }

};

export default TitleInput;