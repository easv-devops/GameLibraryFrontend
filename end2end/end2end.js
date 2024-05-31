import { Selector } from 'testcafe';

fixture `Count consoles`
    .page `http://localhost:4200/`;

test('Count Consoles', async t => {
    
    let consoleCountResponse = await t.request({
        method: 'get',
        url: 'http://localhost:5001/Console/GetConsoles'
    });
    let consoleCount = consoleCountResponse.body.length;


    const dropdownButton = Selector('.dropbtn');


    await t.click(dropdownButton);


    await t.expect(Selector('.dropdown-content a').exists).ok();


    const consoleName = Selector('.dropdown-content a').nth(0).textContent;
    await t.click(Selector('.dropdown-content a').nth(0));


    const displayedCount = Selector('.console-count').textContent;


    await t.expect(displayedCount).eql(consoleCount.toString());
});
