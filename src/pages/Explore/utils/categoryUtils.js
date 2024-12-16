/**
 * Filter trending items based on category
 * @param {Array} items - Array of trending items
 * @param {string} category - Category to filter by
 * @returns {Array} Filtered trending items
 */
export const filterTrendingByCategory = (items, category) => {
  if (!items || !Array.isArray(items)) return [];
  
  return category.toLowerCase() === 'for you'
    ? items
    : items.filter(item => 
        item.category.toLowerCase() === category.toLowerCase()
      );
};

/**
 * Get unique categories from trending items
 * @param {Array} items - Array of trending items
 * @returns {Array} Unique categories
 */
export const getUniqueCategories = (items) => {
  if (!items || !Array.isArray(items)) return [];
  
  return ['For You', ...new Set(items.map(item => item.category))];
};