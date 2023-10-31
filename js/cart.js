// var cart = sessionStorage.getItem("local-cart");
//     var cartProducts = JSON.parse(cart || "[]");

//     var total = 0;
//     for (var i = 0; i < cartProducts.length; i++) {
//       total += cartProducts[i].sum;
//     }
var cartTotal = 0;
function inc(btn) {
    var row = btn.parentNode.parentNode;
    var numtxt = row.querySelector('input[type="text"]');
    var currentValue = parseInt(numtxt.value);
    var newValue = currentValue + 1;
    numtxt.value = newValue;
    var price = parseInt(row.querySelector('td:nth-child(4)').textContent);
    var total = price * newValue;
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 3,

    });

    const formattedTotal = formatter.format(total) + ' đ';
    row.querySelector('#total').textContent = formattedTotal.replace("₫", "");
    cartTotal += price;
    updateSubtotal();
  }
  function dec(btn) {
    var row = btn.parentNode.parentNode;
    var numtxt = row.querySelector('input[type="text"]');
    var currentValue = parseInt(numtxt.value);
    var newValue = currentValue - 1;
    if (newValue < 1) {
      newValue = 1;
    }
    numtxt.value = newValue;
    var price = parseInt(row.querySelector('td:nth-child(4)').textContent);
    var total = price * newValue;
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 3,

    });

    const formattedTotal = formatter.format(total) + ' đ';
    row.querySelector('#total').textContent = formattedTotal;
    cartTotal -= price;
    updateSubtotal();
  }
  $(document).on("click", "img[src='img/remove.png']", function () {
    $(this).parent().parent().remove();
  });
  function updateSubtotal() {
    // Cập nhật giá trị #subtotal trong HTML
    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 3,
    });
    const formattedSubtotal = formatter.format(cartTotal);
    $("#subtotal").text(formattedSubtotal);
}
  // function cart_update(int price){
  //   alert("upd");
  //   var cart = sessionStorage.getItem("local-cart");
  //   var cartProducts = JSON.parse(cart || "[]");

  //   var total = 0;
  //   for (var i = 0; i < cartProducts.length; i++) {
  //     total += cartProducts[i].sum;
  //   }
  //   total = total + price;
  //   alert(total);
  //   $("#subtotal").text(total.toString() + ".000 đ");
  // }
  $(document).ready(function () {
    var cart = sessionStorage.getItem("local-cart");
    var cartProducts = JSON.parse(cart || "[]");
    
    for (var i = 0; i < cartProducts.length; i++) {
      cartTotal += cartProducts[i].sum;
    }
    $("#subtotal").text(cartTotal.toString() + ".000 đ");
  });
  function go_to_check(){
    sessionStorage.setItem("cartTotal", cartTotal);
    window.location.href = "checkout.html";
  }
  // document.getElementById('btn-checkout').addEventListener('click', function() {
   
  //   window.location.href = 'checkout.html';
  // });