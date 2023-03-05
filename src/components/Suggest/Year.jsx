import { SuggestBlock, SuggestItem, SuggestYear } from './Suggest.styled'
import { useThemeContext } from '../../context/theme';

const authors = ['2015', '2016', '2018', '2022']

const ShowYear = function() {
  const { theme } = useThemeContext();

  const authorsPopup = authors.map((author) => (
    <SuggestItem style={{ backgroundColor: theme.backgroundHeader, color: theme.color }} key={author.toString()}>{author}</SuggestItem>
  ))
  return (
    <SuggestYear style={{ backgroundColor: theme.backgroundHeader, color: theme.color }}>
      <SuggestBlock>{authorsPopup}</SuggestBlock>
    </SuggestYear>
  )
}

export default ShowYear
