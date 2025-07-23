import RefOud from '../assets/pic/EDT-RO.png'
import Humbling from '../assets/pic/EDT-Humbling.png'
import Waterfall from '../assets/pic/EDT-WF.png'
import Sage from '../assets/pic/FW-sage.png'
import Revered from '../assets/pic/EDP-RO.png'

const tags = [
    {
        id: 1,
        content: "Fragrance"
    },
    {
        id: 2,
        content: "Face Wash"
    },
    {
        id: 3,
        content: "Body Care"
    }
]
const dataBestSale = [
        {
                id: 1,
                title: 'Kahf EDT - Humbling Forest',
                type:"Eau De Toilette",
                desc: "Men's Eau de Toilette with Cypress forest & Cedarwood scent with a hint of fresh floral.",
                url: Humbling,
                Rating: 5.0,
                Price: 50000
            },
            {
                id: 2,
                title:'Kahf EDT - Invigorating Waterfall',
                type:"Eau De Toilette",
                desc: "Men’s Eau de Toilette with a fresh aquatic and floral scent, added with a touch of citrus.",
                url: Waterfall,
                Rating: 5.0,
                Price: 50000
            },
            {
                id: 3,
                title: 'Kahf EDP - Referred Oud',
                type:"Eau De Parfume",
                desc: "Perfume with notes of oud, amber, vanilla, and rose, evoking tradition and sweet memories.",
                url: RefOud,
                Rating: 5.0,
                Price: 150000
            },
            {
                id: 4,
                title: 'Kahf FW - Oil and Acne Care',
                type:"Face Wash",
                desc: "Men’s face wash for oily and acne-prone skin, hydrates while removing excess oil.",
                url: Sage,
                Rating: 5.0,
                Price: 40000
            },
            {
                id: 5,
                title: 'Kahf EDP - Revered Oud',
                type:"Eau De Parfume",
                desc: "Men’s perfume with a slightly spicy and sweet blend of saffron, oud, mandarin, and long-lasting wood",
                url: Revered,
                Rating: 5.0,
                Price: 150000
            },
]

export {tags, dataBestSale}