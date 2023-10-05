import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    onchangeRating,
    categoryOptions,
    onchangeCatagory,
    onchangeTitle,
    onClearFilters,
  } = props

  return (
    <div className="filters-group-container">
      <input
        placeholder="Search"
        type="search"
        onKeyDown={event => onchangeTitle(event)}
      />
      <div className="catagory">
        <h1 className="catHed">Category</h1>
        {categoryOptions.map(eachCat => (
          <h1 className="catName" key={eachCat.categoryId}>
            <button
              className="catBtn"
              type="button"
              onClick={() => onchangeCatagory(eachCat.categoryId)}
            >
              <p>{eachCat.name}</p>
            </button>
          </h1>
        ))}
      </div>
      <div className="catagory">
        <h1 className="catHed">Rating</h1>
        {ratingsList.map(eachRat => (
          <h1 className="catName" key={eachRat.ratingId}>
            <button
              className="catBtn"
              type="button"
              onClick={() => onchangeRating(eachRat.ratingId)}
            >
              <img
                className="rate-image"
                src={eachRat.imageUrl}
                alt={`rating ${eachRat.ratingId}`}
              />
              & up
            </button>
          </h1>
        ))}
      </div>
      <button type="button" onClick={() => onClearFilters()}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
