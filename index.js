

var bill = document.querySelector(".bill-amount");
var numberOfPeople = document.querySelector(".people-amount");
var customTip = document.querySelector(".form-control");

$(".percentage-btn").click( function () {
var percentageValue = parseInt(this.value);

var billPercentage =(parseInt(bill.value) * ( percentageValue /100))/parseInt(numberOfPeople.value);
var totalAmountPerPerson = (parseInt(bill.value) + (parseInt(bill.value) * ( percentageValue /100)))/parseInt(numberOfPeople.value);


  $("#tipAmountValue").html("$" + Math.floor(billPercentage) );
    $("#tipTotalValue").html("$" + Math.floor(totalAmountPerPerson) );
})

$(".btn-reset").click(function () {
    $("#tipAmountValue").html("$0.00");
  $("#tipTotalValue").html("$0.00") ;
})

$(".tick-btn").click(function () {
var billPercentageCustom =(parseInt(bill.value) * ( parseInt(customTip.value) /100))/parseInt(numberOfPeople.value);
var totalAmountPerPersonCustom = (parseInt(bill.value) + (parseInt(bill.value) * ( parseInt(customTip.value) /100)))/parseInt(numberOfPeople.value);
  $("#tipAmountValue").html("$" + Math.floor(billPercentageCustom) );
  $("#tipTotalValue").html("$" + Math.floor(totalAmountPerPersonCustom));
})
