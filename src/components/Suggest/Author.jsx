const authors = ['Basta', 'Tom Boxer', 'Ali Bakgor', 'Nero']
import { SuggestAuthor, SuggestBlock, SuggestItem } from './Suggest.styled'
import { useThemeContext } from '../../context/theme';

const ShowAuthor = function () {
  const { theme } = useThemeContext();

  const authorsPopup = authors.map((author) => (
    <SuggestItem style={{ backgroundColor: theme.backgroundHeader, color: theme.color }} key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestAuthor style={{ backgroundColor: theme.backgroundHeader, color: theme.color }}>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestAuthor>
  )
}

export default ShowAuthor
