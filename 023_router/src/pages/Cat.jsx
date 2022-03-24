import React from 'react'
import ContentBlock from "../components/UI/ContentBlock/ContentBlock";
import Quote from "../components/UI/Quote/Quote";

const Cat = ({...props}) => {
  return (
    <ContentBlock>
      <Quote {...props}
       source={'https://en.wikipedia.org/wiki/Cat'}
       sourceName={'Wikipedia.org'}
      >
        <h1>Cat</h1>
        <p>
          The cat (Felis catus) is a domestic species of a small carnivorous mammal. It is the only domesticated
          species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild
          members of the family.A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely
          and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill
          rodents. About 60 cat breeds are recognized by various cat registries.
        </p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cat_poster_1.jpg/260px-Cat_poster_1.jpg" />
      </Quote>
    </ContentBlock>
  )
}

export default Cat