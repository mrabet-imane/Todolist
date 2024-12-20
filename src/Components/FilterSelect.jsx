import React from 'react';

const FilterSelect = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label htmlFor="filter">Filtrer par catégorie:</label>
      <select id="filter" value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Toutes</option>
        <option value="A">Catégorie A</option>
        <option value="B">Catégorie B</option>
      </select>
    </div>
  );
};

export default FilterSelect;
