import "./filters.scss"

export const Filters = () => {

    const filters = [
        {
            id:1,
            name:"date",
            type:"select",
            options: ["Newest", "Popular", "Latest"]
        },
        {
            id:1,
            name:"price",
            type:"select",
            options: ["Increasing", "Decreasing"]
        },
        {
            id:1,
            name:"size",
            type:"select",
            options: ["XS" ,"S", "M", "L", "XL"]
        },
        {
            id:1,
            name:"type",
            type:"select",
            options: ["t-shirt"]
        },
        {
            id:1,
            name:"collection",
            type:"select",
            options: ["Summer" ,"Spring", "Autumn", "Winter", "Old School"]
        },
    ]
  return (
    <div className="filters">
        <div className="wrapperFilters">
        <h1>Filters</h1>
            {filters && filters.map(e => (
                <>
               <label htmlFor={e.name}>{e.name}</label>
                <select name={e.name} key={e.name}>
                    <select name={e.name} id={e.name}></select>
                    {e.options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
                </>
            ))}
        </div>
    </div>
  )
}
