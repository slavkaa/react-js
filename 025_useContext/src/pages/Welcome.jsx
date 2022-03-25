import React, {useContext} from 'react'
import ContentBlock from "../components/UI/ContentBlock/ContentBlock";
import Quote from "../components/UI/Quote/Quote";

const Welcome = ({...props}) => {
  return (
    <ContentBlock>
      <Quote {...props}
         source={'https://en.wikipedia.org/wiki/Cat'}
         sourceName={'Wikipedia.org'}>
        <h1>Pet</h1>
        <p>
          Sing in to read articles about cats, dogs and fish.
          <br/>
          <br/>
          A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than
          as a working animal, livestock or a laboratory animal. Popular pets are often considered to have attractive
          appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis
          (such as a stray animal) and accepted by the owner regardless of these characteristics.
        </p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Trillium_Poncho_cat_dog.jpg/220px-Trillium_Poncho_cat_dog.jpg" />
      </Quote>
    </ContentBlock>
  )
}

export default Welcome