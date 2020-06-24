describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function() {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add a new server to allServers on submitServerInfo()', function() {
        submitServerInfo();

        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });


    //begin assignment
    it('should remove server on page', function() {
        serverNameInput.value = ""
        submitServerInfo()

        expect(Object.keys(allServers).length).toEqual(0)
    })


    it('should add server tip info to the webpage/html', function() {
        submitServerInfo();
        updateServerTable();

        let summaryTDS = document.querySelectorAll('#serverTable tbody tr td');

        expect(summaryTDS.length).toEqual(3)
            //expect(appendTd.length).toBeGreaterThanOrEqual(2);
        expect(summaryTDS[0].innerText).toEqual('Alice')
        expect(summaryTDS[1].innerText).toEqual('$0.00')
        expect(summaryTDS[2].innerText).toEqual('x')

    })


    afterEach(function() {
        // teardown logic
        allServers = {};
        serverId = 0;
        serverTbody.innerHTML = "";
    })
})