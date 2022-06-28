import { useState } from "react"
import { Sort } from "../sort/Sort"
import "./filters.scss"

export const Filters = ({sort,setSort, filters,setFilters}) => {

    const filter = [
        {
            id:1,
            name:"size",
            type:"select",
            options: ["35" ,"36", "37", "38", "39",'40','41','42','43','44','45'],
        },
        {
            id:1,
            name:"brand",
            type:"select",
            options: ["Nike", "Adidas", "Puma", "Converse", "Birkenstock","Unknown"]
        },
        {
            id:1,
            name:"collection",
            type:"select",
            options: ["Summer" ,"Spring", "Autumn", "Winter"]
        },
    ]

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
           [e.target.name]:value 
        })
    }


console.log(filters)
  return (
    <div className="filterContainer">
        <div className="filters">
            <div className="wrapperFilters">            
                {filter && filter.map(e => (
                <>
                <label htmlFor={e.name}>{e.name}</label>
                    <select name={e.name} key={e.name} onChange={handleFilters}>
                        {e.options.map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                    </>
                ))}
                <span onClick={() => setFilters({})} className="clearFilters">Clear Filters</span>
            </div>
        </div>
        <Sort  sort={sort} setSort={setSort}/>
    </div>
  )
}
