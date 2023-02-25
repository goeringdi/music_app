const authors = ['pop', 'jazz', 'rap', 'dance']
import { SuggestBlock, SuggestGenre, SuggestItem } from './Suggest.styled'
import { useThemeContext } from '../../context/theme';

const ShowGenre = function () {
  const { theme } = useThemeContext();

  const authorsPopup = authors.map((author) => (
    <SuggestItem style={{ backgroundColor: theme.backgroundHeader, color: theme.color }} key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestGenre style={{ backgroundColor: theme.backgroundHeader, color: theme.color }}>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestGenre>
  )
}

export default ShowGenre
