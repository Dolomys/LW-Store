import './sort.scss'
export const Sort = () => {

    const sortOptions = [
        {
            id:1,
            value: "Latest"
        },
        {
            id:2,
            value: "Newest"
        },
        {
            id:3,
            value: "Popularity"
        },
        {
            id:4,
            value: "Price increasing"
        },
        {
            id:5,
            value: "Price Decreasing"
        },
    ]
  return (
    <div className="sort">
        <div className="sortWrapper">
            <label htmlFor="sortBy">Sort By</label>
            <select name="sortBy" id='sortBy'>
                {sortOptions && sortOptions.map(e => (
                    <option value={e.value}>{e.value}</option>
                ))}
            </select>
        </div>
    </div>
  )
}
