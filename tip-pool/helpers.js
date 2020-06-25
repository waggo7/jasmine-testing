// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
    let total = 0;

    for (let key in allPayments) {

        let payment = allPayments[key];

        total += Number(payment[type]);
    }

    return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
    return Math.round(100 / (billAmt / tipAmt));
}
//300 / 30 
// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {

    let newTd = document.createElement('td');
    newTd.innerText = value;

    tr.append(newTd);
    //appendDeleteBtn(newTd, 'X')

}

function appendDeleteBtn(tr, type) {
    //let tdpayment = document.getElementById('serverTable')
    let newbtn = document.createElement('td')
    newbtn.id = 'deletebtn'
    newbtn.innerText = "X"
    newbtn.addEventListener('click', function(e) {
        let deleteTR = e.target.closest('tr');
        delete allServers[deleteTR.id];
        deleteTR.parentNode.removeChild(deleteTR);
        updateServerTable();
    });
    tr.append(newbtn);

}