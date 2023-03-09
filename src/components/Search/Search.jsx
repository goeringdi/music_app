import { useDispatch } from 'react-redux'
import { search } from '../../store/slices/searchSlice'
import searchLight from '../../img/icon/search.svg';
import searchBlack from '../../img/icon/searchBlack.svg';
import * as S from './styles'
import { useThemeContext } from '../../context/theme'

export default function Search() {
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        dispatch(search(e.target.value))
    }
    const { theme } = useThemeContext()

    return (
        <S.SearchBlock style={{ backgroundColor: theme.background, color: theme.color }}>
            {theme.colorA ? (
            <S.SearchIcon  src={searchBlack} alt= "search"/>               
            ) : (
            <S.SearchIcon  src={searchLight} alt= "search"/>               
            )}
            <S.SearchInput
                onChange={onChangeHandler}
                placeholderColor={theme.placeholder}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </S.SearchBlock>
    )
}