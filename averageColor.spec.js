const { averageColor } = require('./averageColor');

test("average of EE63AB and DD67EA is E665CB", () => {
	expect(averageColor('EE63AB', 'DD67EA')).toEqual('E665CB');
});

test("average of 001122 and 996633 is 4D3C2B", () => {
	expect(averageColor('001122', '996633')).toEqual('4D3C2B');
});

test("average of BDEFCD and 184FC3 is 6B9FC8", () => {
	expect(averageColor('BDEFCD', '184FC3')).toEqual('6B9FC8');
});
