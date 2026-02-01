import React from 'react';
import './ShopFilterSort.css';

function ShopFilterSort({ onFilterChange, onSortChange }) {
  return (
    <div className="shop-filter-sort">
      <div className="filter">
        <label>Filter:</label>
        <select onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="discounted">Discounted</option>
          <option value="new">New</option>
        </select>
      </div>
      <div className="sort">
        <label>Sort by:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}

export default ShopFilterSort;
