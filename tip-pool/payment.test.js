describe("testing payments", function() {
    beforeEach(function() {
        billAmtInput.value = 300;
        tipAmtInput.value = 30;
    });

    it('adding a payment to allpayments on submintpaymentinfo', function() {
        submitPaymentInfo();


        expect(allPayments.length).toEqual(paymentId.length);
        expect(allPayments['payment1'].billAmt).toEqual('300')
        expect(allPayments['payment1'].tipAmt).toEqual('30')
        expect(allPayments['payment1'].tipPercent).toEqual(10)
    })
    it('should not add a payment', function() {
        billAmtInput.value = ''
        submitServerInfo();

        expect(Object.keys(allPayments).length).toEqual(0)
    })
    it('should update payment info on the #paymenttable', function() {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let summaryTDS = document.querySelectorAll('#paymentTable tbody tr td')

        expect(summaryTDS.length).toEqual(4)
        expect(summaryTDS[0].innerText).toEqual('$300')
        expect(summaryTDS[1].innerText).toEqual('$30')
        expect(summaryTDS[2].innerText).toEqual('%10')
        expect(summaryTDS[3].innerText).toEqual('X')
    });

    it('should creat a new payment on createCurPayment', function() {
        let payment = {
            billAmt: '300',
            tipAmt: '30',
            tipPercent: 10,
        }

        expect(createCurPayment()).toEqual(payment);
    })
    it('should not creat a payment value with an empty input createCurPayment', function() {
        billAmtInput.value = ''
        tipAmtInput.value = ''
        let curPayment = createCurPayment();


        expect(curPayment).toBe(undefined)
    })

    afterEach(function() {
        billAmtInput.value = "";
        tipAmtInput.value = "";
        paymentTbody.innerHTML = "";
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    })
});