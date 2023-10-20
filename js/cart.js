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
  }
  $(document).on("click", "img[src='img/remove.png']", function () {
    $(this).parent().parent().remove();
  });