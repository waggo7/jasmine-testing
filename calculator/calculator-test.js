describe('testing and breaking down calculator', function() {
    beforeEach(function() {
        values = {
            amount: 30000,
            years: 9,
            rate: 5.0
        };
    })
    it('should return an object containing amount, years, and rate', function() {
        getCurrentUIValues()
        expect(getCurrentUIValues).toContain('amount', 'years', 'rate')
    })
    it('should set up values to utilize', function() {
        values = { amount: 100, years: 2, rate: 5 }
        setupIntialValues();

        expect(values.amount).toEqual(100)
    })
    it('should calculate the monthly rate correctly', function() {
        monthlyRate = ((values.rate / 100) / 12).toFixed(4);
        calculateMonthlyPayment(values);

        expect(monthlyRate).toEqual('0.0042')
    });


    it("should return how many payments", function() {
        time = Math.floor(values.years * 12)
        calculateMonthlyPayment(values);

        expect(time).toEqual(108)
    });
    it('should give month payment amount', function() {
        values = { amount: 1000, years: 2, rate: 5 }
        expect(calculateMonthlyPayment(values)).toEqual('43.87');

    })
    it('should update the UI to show the value', function() {
        values = { amount: 1000, years: 2, rate: 5 }
        monthly = calculateMonthlyPayment(values)
        const monthlyRate = document.getElementById('monthly-payment')
        updateMonthly(monthly);
        expect(monthlyRate.innerHTML).toEqual('$43.87')
    })
})