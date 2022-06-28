import { useState } from "react"
import "./collections.scss"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const Collections = () => {

    const [hovered, setHovered] = useState("")

    const cats = [
        {
            title:'Spring',
            img: "https://images.unsplash.com/photo-1533435137002-455932c8538f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            link: '/products',
            display:"card-wide"
        },
        {
            title:'Spring',
            img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80",
            link: '/products',
            display: "card-tall"
            
        },
        {
            title:'Spring',
            img: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            link: '/products',
        },
        {
            title:'Spring',
            img: "https://images.unsplash.com/photo-1617551307538-c9cdb9d71289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            link: '/products',
            // display: "card-tall"
        },
        {
            title:'Spring',
            img: "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            link: '/products',
        },
    ]

    console.log(hovered)
  return (
    <div className="collections">
        {cats && cats.map(cat => (
            <motion.a 
            href={cat.link}
            className={cat.display ? "cat " + cat.display : "cat"}
            onMouseEnter={() => setHovered(cat.img)}
            onMouseLeave={() => setHovered("")}
            style={{backgroundImage:`url(${cat.img})`}}
              >

            {hovered === cat.img ? 
            <Link to={cat.link}>See Collection</Link>
            :
            <h3>{cat.title}</h3>
            }
                
                
            </motion.a>
        ))}
    </div>
  )
}
