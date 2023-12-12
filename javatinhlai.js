document.getElementById('interest-calculator').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var principalAmount = parseFloat(document.getElementById('principal-amount').value);
  var interestRate = 0.7; // Lãi suất 0.7% trên 1 tháng
  var investmentPeriod = parseFloat(document.getElementById('investment-period').value);
  
  var interestAmount = (principalAmount * interestRate * investmentPeriod) / 100;
  var totalAmount = principalAmount + interestAmount;
  
  document.getElementById('interest-amount').textContent = 'Lãi suất nhận được: ' + interestAmount.toFixed(2) + ' VNĐ';
  document.getElementById('total-amount').textContent = 'Tổng số tiền sau kỳ hạn: ' + totalAmount.toFixed(2) + ' VNĐ';
  
  document.getElementById('result').style.display = 'block';
});