import { Collections } from "../../components/collections/Collections"
import { Footer } from "../../components/footer/Footer"
import { Newsletter } from "../../components/newsletter/Newsletter"
import { SliderIntro } from "../../components/slider/Slider"
import "./home.scss"


export const Home = () => {

 
  return (
    <div className="home">
        <SliderIntro />
        <Collections />
        <Newsletter />
        <Footer />
    </div>
  )
}
