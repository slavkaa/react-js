import React from 'react'
import ContentBlock from "../components/UI/ContentBlock/ContentBlock";
import Quote from "../components/UI/Quote/Quote";

const Fish = ({...props}) => {
  return (
    <ContentBlock>
      <Quote {...props}
       source={'https://en.wikipedia.org/wiki/Fish'}
       sourceName={'Wikipedia.org'}
      >
        <h1>Fish</h1>
        <p>
          Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits. Included in this definition are
          the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups.
          Around 99% of living fish species are ray-finned fish, belonging to the class Actinopterygii,
          with over 95% belonging to the teleost subgrouping.
        </p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/220px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg" />
      </Quote>
    </ContentBlock>
  )
}

export default Fish