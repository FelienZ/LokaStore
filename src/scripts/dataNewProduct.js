import Saffron from '../assets/pic/EDP-SO.png'
import Revered from '../assets/pic/EDP-RO.png'
import Serum from '../assets/pic/Face-Serum.png'
import Exfo from '../assets/pic/FW-Bhood.png'
import Charcoal from '../assets/pic/FW-Charcoal.png'
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
const dataNewProducts = [
        {
                id: 1,
                title: 'Kahf EDP - Saffron Oud',
                type:"Eau De Parfume",
                desc: "Men’s perfume with a slightly spicy and sweet blend of saffron, oud, mandarin, and long-lasting wood",
                url: Saffron,
                Rating: 4.8,
                Price: 150000
            },
        {
                id: 2,
                title: 'Kahf EDP - Revered Oud',
                type:"Eau De Parfume",
                desc: "Men’s perfume with a slightly spicy and sweet blend of saffron, oud, mandarin, and long-lasting wood",
                url: Revered,
                Rating: 5.0,
                Price: 150000
            },
        {
                id: 3,
                title: 'Kahf Serum - Bright & Texture Refining',
                type:"Body Care",
                desc: "Men’s serum that targets dullness and uneven texture, formulated especially for men’s facial skin.",
                url: Serum,
                Rating: 4.8,
                Price: 80000
            },
            {
                id: 4,
                title: 'Kahf FW - Brightening & Dark Spot Scrub',
                type:"Face Wash",
                desc: "Men's facial scrub that helps fade dark spots and keeps skin hydrated and healthy",
                url: Exfo,
                Rating: 4.8,
                Price: 40000
            },
            {
                id: 5,
                title: 'Kahf FW - Triple Action Oil & Comedo Defense',
                type:"Face Wash",
                desc: "3-in-1 men’s face wash to control excess oil, reduce blackheads, and keep your skin clean.",
                url: Charcoal,
                Rating: 4.8,
                Price: 40000
            },
]

export {tags, dataNewProducts}