export const products = [
    {   
        id: 1,
        title: 'Remera Argentina',
        descuento: 15,
        price: 2000,
        stock: 10,
        category: 'remera',
        img: 'https://res.cloudinary.com/da2zg5p95/image/upload/v1667347616/39b3044e-6cb4-4aa7-a99e-0dc41e94e743_l8bfaw.jpg',
        
    },
    {
        id: 2,
        title: 'Remera Boca 2007 - Roman',
        descuento: 12,
        price: 200,
        stock: 5,
        category: 'remeras retro',
        img: 'https://res.cloudinary.com/da2zg5p95/image/upload/v1667347616/4b7b968b-0382-47ae-8bf9-d31e92fc0d27_ljtzkv.jpg', 
    },
    {
        id: 3,
        title: 'Short Argentina',
        descuento: 17,
        price: 3000,
        stock: 5,
        category: 'Short',
        img: 'https://res.cloudinary.com/da2zg5p95/image/upload/v1667347615/5dc42cfb-7062-49a0-b73f-72707372af19_k7rgcy.jpg',  
    }

];

export const getProducts = () =>{
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            res(products)
        },2000)
    })
};
