let total = 0

/// ? add item name and the product price to total price 
function mainCardClick(target) {
    const itemName = target.childNodes[1].childNodes[3].childNodes[3].innerText
    const orderList = document.getElementById('orderList')
    const li = document.createElement('li')
    li.innerText = itemName;
    li.style.marginLeft = '24px'
    li.style.fontWeight = '600'
    li.style.marginBottom = '5px'
    orderList.appendChild(li)


    const Price = target.childNodes[1].childNodes[3].childNodes[5].childNodes[0].innerText;

    total = parseFloat(total) + parseFloat(Price)
    const totalPrice = document.getElementById('totalPrice')
    totalPrice.innerText = total.toFixed(2)


    // purchase button enable
    if (total > 0) {
        document.getElementById('purchase-btn').classList.remove('opacity-50')
        document.getElementById('purchase-btn').classList.remove('hover:cursor-not-allowed')
        document.getElementById('purchase-btn').removeAttribute('disabled', true)
    }

    // coupon button enable
    if (total >= 200) {
        document.getElementById('applyBtn').removeAttribute('disabled', true)
        document.getElementById('applyBtn').classList.remove('opacity-50')
        document.getElementById('applyBtn').classList.remove('hover:cursor-not-allowed')
    }
}



// get discount
document.getElementById('applyBtn').addEventListener('click', function () {
    const discount = document.getElementById('discountAmount')
    const totalAmount= document.getElementById('totalAmount')

    const couponField = document.getElementById('coupon-field')
    const couponText = couponField.value;

    if (couponText === 'SELL200') {
        const discountPrice = total * 0.2
        discount.innerText = discountPrice.toFixed(2)
        newTotalAmount = total - discountPrice

        totalAmount.innerText = newTotalAmount.toFixed(2)
    }
})


//modal go home 
document.getElementById('goHomeBtn').addEventListener('click', function () {
    window.location.href = 'index.html'
    window.location.href = 'http://127.0.0.1:5500/index.html'
})