import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Label, Wrapper } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
export const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);
  return (
    <Wrapper>
      <Label>Find contacts by name</Label>
      <FilterInput
        type="text"
        value={filters}
        placeholder="Type name..."
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </Wrapper>
  );
};
