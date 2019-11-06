import { createSelector } from 'reselect';

const value = state => state.value;

export const valueSelector = createSelector(
  value,
  v => v
);


