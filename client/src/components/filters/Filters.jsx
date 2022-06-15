import { Sort } from "../sort/Sort"
import "./filters.scss"

export const Filters = () => {

    const filters = [
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
            options: ["t-shirt", "pull", "veste", "jean", "chaussettes"]
        },
        {
            id:1,
            name:"collection",
            type:"select",
            options: ["Summer" ,"Spring", "Autumn", "Winter", "Old School"]
        },
    ]
  return (
    <div className="filterContainer">
        <div className="filters">
            <div className="wrapperFilters">
            <h1>Filters</h1>
                {filters && filters.map(e => (
                    <>
                <label htmlFor={e.name}>{e.name}</label>
                    <select name={e.name} key={e.name}>
                        {e.options.map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                    </>
                ))}
            </div>
        </div>
        <Sort />
    </div>
  )
}
