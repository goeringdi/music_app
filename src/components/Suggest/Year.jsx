import { SuggestBlock, SuggestItem, SuggestYear } from './Suggest.styled'

const authors = ['2015', '2016', '2018', '2022']

const ShowYear = function() {
  const authorsPopup = authors.map((author) => (
    <SuggestItem key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestYear>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestYear>
  )
}

export default ShowYear
