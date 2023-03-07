import * as S from './styles'
import PropTypes from 'prop-types';

export default function FilterItem({ value, onClickFunction }) {
    return (
        <S.FilterItemsLabel htmlFor="filter">
            <S.FilterItem
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <S.FilterLabel htmlFor={value}>{value}</S.FilterLabel>
        </S.FilterItemsLabel>
    )
}

FilterItem.propTypes = {
    value: PropTypes.string,
    onClickFunction: PropTypes.func,
    };