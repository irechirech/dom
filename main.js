let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 1
    },
    {
        name: 'Grey Hoddie',
        tag: 'greyhoddie',
        price: 20,
        inCart: 1
    },
    {
        name: 'Black Tshirt',
        tag: 'Blacktshirt',
        price: 10,
        inCart: 1
    },
    {
        name: 'Black Hoddie',
        tag: 'blackhoddie',
        price: 20,
        inCart: 1
    }
];
let arr = [];
if (localStorage.getItem("panier") == undefined) {
    localStorage.setItem("panier",JSON.stringify([]))

}

function addtocart(ra9m) {
    let status = false;
    let panier = JSON.parse(localStorage.getItem("panier"))
    if (panier.length == 0) {
        arr.push(products[ra9m])
                    console.log("not found 1")

            localStorage.setItem("panier",JSON.stringify(arr))

    }
    for (let y of panier) {
        if (y.name == products[ra9m].name) {
            console.log("found")
            status = true;
           

        }
        else {
            console.log("not found 2")

            

        }
    }

    if (status == true) {
         arr[ra9m].inCart += 1
             localStorage.setItem("panier",JSON.stringify(arr))
    }
    else if(status==false && panier.length!=0) {
        arr.push(products[ra9m])
            localStorage.setItem("panier",JSON.stringify(arr))
    }
    


}
function removecart(ra9m) {


    let panier = JSON.parse(localStorage.getItem("panier"))
    
    let status = false;
    let name;

    for (let y of panier) {
        if (y.name == products[ra9m].name) {
            console.log("found")
            status = true;
           name=y.name

        }
        else {
            console.log("not found 2")

            

        }
    }

    if (status == true) {
        if (panier[ra9m].inCart == 1) {
            arr = panier.filter(produit => produit.name !== name);
                         localStorage.setItem("panier",JSON.stringify(arr))

    
}
         arr[ra9m].inCart -= 1
             localStorage.setItem("panier",JSON.stringify(arr))
    }
    else if(status==false && panier.length!=0) {
        
    }

}

let panier = JSON.parse(localStorage.getItem("panier"))

for (let x of panier) {
    let div = document.createElement("div");
    div.innerHTML = `<h3>${x.name}</h3>  <h3>${x.price}</h3>  <h3>${x.inCart }</h3> <h3>${x.inCart * x.price}</h3>`;
    
    
     document.getElementsByClassName("panier")[0].appendChild(div)

    


    

}

// let p = document.createElement("p");

// p.textContent = panier[0].name
// let p1 = document.createElement("p");

// p1.textContent= panier[0].price

// document.getElementsByClassName("panier")[0].appendChild(p)
// document.getElementsByClassName("panier")[0].appendChild(p1)






// for (let i = 0; i < carts.length; i++){

//     carts[i].addEventListener('click', () => {
//         cartNumbers(products[i]);
//     })
// }

// function onLoadCartNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     if (productNumbers) {
//         document.querySelector('.cart span').textContent = productNumbers;
//     }
// }
// function cartNumbers(product) {

//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.cart span').textContent = productNumbers + 1;
//     } else {
//         localStorage.setItem('cartNumbers', 1);
//         document.querySelector('.cart span').textContent = 1;
//     }
//     setItems(product);    
    
// }
// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);
//     if (cartItems != null) {
//         if (cartItems[product.tag] == undefined) {
//             cartItems = {
//                 ...cartItems,
//                 [product.tag]:product
//              }
//          }
    
//         cartItems[product.tag].inCart += 1;
//     } else {
//         product.inCart = 1;
//         cartItems = {
//         [product.tag]: product
//     }
//     }
    
//     localStorage.setItem("productsIncart", JSON.stringify (cartItems));
// }
// onLoadCartNumbers()
