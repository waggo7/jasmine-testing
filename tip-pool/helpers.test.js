describe('functions to help js setup and break down', function() {
    beforeEach(function() {
        billAmtInput.value = 300;
        tipAmtInput.value = 30;
        submitPaymentInfo();
    });

    it('sums up all tip payments', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(30);

        billAmtInput.value = 100;
        tipAmtInput.value = 40;
        submitPaymentInfo();


        expect(sumPaymentTotal('tipAmt')).toEqual(70);
    });

    it('sums up the bill payments', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(300);

        billAmtInput.value = 700;
        tipAmtInput.value = 100;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(1000);
    });

    it('converts bill and tip to a percentage', function() {
        expect(calculateTipPercent(500, 50)).toEqual(10);
    })
    it('expects a new trow and appends a td', function() {
        let Newtr = document.createElement('tr')
        appendTd(Newtr, 'new element here');



        expect(Newtr.children.length).toEqual(1);
        expect(Newtr.firstChild.innerHTML).toEqual('new element here')
    });
    it('expects to delete the information provided when the X is clicked', function() {
        let btn = document.createElement('tr')
        appendDeleteBtn(btn);

        expect(btn.children.length).toEqual(1)
        expect(btn.firstChild.innerHTML).toEqual('X')
    })
    afterEach(function() {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = ''
        summaryTds[1].innerHTML = ''
        summaryTds[2].innerHTML = ''
        serverTbody.innerHTML = ""
        allPayments = {}
        paymentId = 0;
    })
})