const precioOriginal = 100;
const descuento = 15;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento / 100);

    return precioConDescuento;
}

function PriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;

    const inputDiscount = 0;

    const inputCoupon = document.getElementById("inputCoupons");
    const coupon = inputCoupon.value;

    switch (coupon) {
        case 'PROMO':
            discount = 35;
            break;

        case "JAVASCRIPT":
            discount = 50;
            break;

        case "PERA":
            discount = 75;
            break;
            
        default:
            discount = inputDiscount.value;
            break;
    }

    const result = calcularPrecioConDescuento(price, discount);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = `El precio con descuento es Q${result}`;
}