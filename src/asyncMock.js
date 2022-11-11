const products = [
    {
        id: 1,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 2,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 3,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 4,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 5,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 6,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
    {
        id: 7,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "novela",
        description: "",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/111/169/products/dsc1107-scaled1-4a1b5208667dc3d97516417418292441-640-0.jpeg",
        price: 5801,
        stock: 5
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 200)
    })
}