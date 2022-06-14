import { Filters } from "../../components/filters/Filters"
import { Products } from "../../components/products/Products"
import "./store.scss"

export const Store = () => {
  return (
    <div className="store">
        <Filters />
        <Products />
    </div>
  )
}
