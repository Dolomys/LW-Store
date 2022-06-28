import './sort.scss'
export const Sort = ({sort,setSort}) => {

    const sortOptions = [
        {
            id:1,
            value: "Price ( Highest )"
        },
        {
            id:3,
            value: "Price ( Lowest )"
        },
    ]
  return (
    <div className="sort">
        <div className="sortWrapper">
            <label htmlFor="sortBy">Sort By :</label>
            <select name="sortBy" id='sortBy' onChange={(e) => setSort(e.target.value)}>
                {sortOptions && sortOptions.map(e => (
                    <option value={e.value}>{e.value}</option>
                ))}
            </select>
        </div>
    </div>
  )
}
