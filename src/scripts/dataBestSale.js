import RefOud from '../assets/pic/Kahf-RO.png'
import Humbling from '../assets/pic/Kahf-Humbling-Forest.png'
import Waterfall from '../assets/pic/kahf-wf.png'

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
                Price: 50000
            },
]

export {tags, dataBestSale}