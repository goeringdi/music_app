const authors = ['pop', 'jazz', 'rap', 'dance']
import { SuggestBlock, SuggestGenre, SuggestItem } from './Suggest.styled'

const ShowGenre = function () {
  const authorsPopup = authors.map((author) => (
    <SuggestItem key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestGenre>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestGenre>
  )
}

export default ShowGenre
