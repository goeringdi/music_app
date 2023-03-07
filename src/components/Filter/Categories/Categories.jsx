import PropTypes from 'prop-types';
import * as S from './styles'

export default function Categories({ text, isActive, count }) {
    return (
        <S.FilterButton isActive={isActive}>
            <p>{text}</p>
            <S.FilterButtonCount isActive={isActive}>
                {count}
            </S.FilterButtonCount>
        </S.FilterButton>
    )
}

Categories.propTypes = {
    text: PropTypes.string,
    isActive: PropTypes.bool,
    count: PropTypes.string
    };