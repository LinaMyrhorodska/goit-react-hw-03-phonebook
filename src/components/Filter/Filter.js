import PropTypes from 'prop-types';
import { FilterLabel, FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onInputChange }) => {

    return (
        <>
            <FilterLabel>
                <FilterTitle>Find contacts by name</FilterTitle>
                <FilterInput
                    onChange={onInputChange}
                    value={filter}
                    type='text'
                    name='filter'
                />
            </FilterLabel>
        </>
    )
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
};