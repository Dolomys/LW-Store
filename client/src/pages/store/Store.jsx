import { Filters } from "../../components/filters/Filters"
import { Footer } from "../../components/footer/Footer"
import { Products } from "../../components/products/Products"
import { Sort } from "../../components/sort/Sort"
import "./store.scss"

export const Store = () => {
  return (
    <>
       <div className="store">
          <Filters />
          <Products />
    </div>
    <Footer />
    </>
  )
}
