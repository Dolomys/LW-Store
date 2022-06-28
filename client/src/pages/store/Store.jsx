import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Filters } from "../../components/filters/Filters"
import { Footer } from "../../components/footer/Footer"
import { Products } from "../../components/products/Products"
import { Sort } from "../../components/sort/Sort"
import "./store.scss"

export const Store = () => {

  const [filters, setFilters] = useState()
  const [sort, setSort] = useState("")  

  return (
    <>
       <div className="store">
          <Filters filters={filters} setFilters={setFilters} sort={sort} setSort={setSort}/>
          <Products filters={filters} sort={sort} setFilters={setFilters}/>
    </div>
    <Footer />
    </>
  )
}
