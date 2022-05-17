// const precioOriginal = 120;
// const descuento = 18;


// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return precioConDescuento;
// }


// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     switch(couponValue){
//         case coupons[0]: // "ChachisV"
//             descuento = 15;
//         break;
//         case coupons[1]: // "SuperSaiyan"
//             descuento = 20;
//         break;
//         case coupons[2]: // "SuperChachisV"
//             descuento = 35;
//         break;

//     }


//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("resultP");
//     resultP.innerHTML = "El precio con descuento es $" + precioConDescuento ;
// }


// console.log({
//     precioOriginal, 
//     descuento, 
//     porcentajePrecioConDescuento, 
//     precioConDescuento
// })

// Cupones de descuento con arrays y switch


// const coupons = [
//     "ChachisV", 
//     "SuperSaiyan", 
//     "SuperChachisV",
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return precioConDescuento;
// }


// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     switch(couponValue){
//         case coupons[0]: // "ChachisV"
//             descuento = 15;
//         break;
//         case coupons[1]: // "SuperSaiyan"
//             descuento = 20;
//         break;
//         case coupons[2]: // "SuperChachisV"
//             descuento = 35;
//         break;

//     }


//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("resultP");
//     resultP.innerHTML = "El precio con descuento es $" + precioConDescuento ;
// }


// legibilidad, error first y muerte al switch

// const coupons = [
//     "ChachisV", 
//     "SuperSaiyan", 
//     "SuperChachisV",
// ];

// function calcularPrecioConDescuento(precio, descuento){
//     const porcentajePrecioConDescuento = 100 - descuento;
//     const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

//     return precioConDescuento;
// }


// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("inputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("inputCoupon");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     if (!coupons.includes(couponValue)){
//         alert("El cupón " + couponValue + " no existe");
//     }
//     else if (couponValue === "ChachisV") {
//         descuento = 15 
//     }
//     else if (couponValue === "SuperSaiyan") {
//         descuento = 25 
//     }
//     else if (couponValue === "SuperChachisV") {
//         descuento = 35 
//     }
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("resultP");
//     resultP.innerText = "El precio con descuento es $" + precioConDescuento ;
// }


// Arrays y condicionales mucho mas inteligentes

const coupons = [
    {
        name: "ChachisV", 
        discount: 15, 
    },
    {
        name: "SuperSaiyan", 
        discount: 25, 
    },
    {
        name: "SuperChachisV", 
        discount: 35, 
    },

]


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

const isCouponValueValid = function(coupon){
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon){
    alert("El cupón " + couponValue + " no existe");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento ;
}
}
