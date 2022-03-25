import React from 'react'
import ContentBlock from "../components/UI/ContentBlock/ContentBlock";
import Quote from "../components/UI/Quote/Quote";

const Dog = ({...props}) => {
  return (
    <ContentBlock>
      <Quote {...props}
       source={'https://en.wikipedia.org/wiki/Dog'}
       sourceName={'Wikipedia.org'}
      >
        <h1>Dog</h1>
        <p>
          The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf
          which is characterized by an upturning tail. The dog is derived from an ancient, extinct wolf,
          and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated,
          by hunter–gatherers over 15,000 years ago, before the development of agriculture.
        </p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Black_Labrador_Retriever_-_Male_IMG_3323.jpg/96px-Black_Labrador_Retriever_-_Male_IMG_3323.jpg" />
      </Quote>
    </ContentBlock>
  )
}

export default Dog