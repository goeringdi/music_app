const authors = ['Basta', 'Tom Boxer', 'Ali Bakgor', 'Nero']
import { SuggestAuthor, SuggestBlock, SuggestItem } from './Suggest.styled'

const ShowAuthor = function () {
  const authorsPopup = authors.map((author) => (
    <SuggestItem key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestAuthor>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestAuthor>
  )
}

export default ShowAuthor
