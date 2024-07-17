import {Province} from "./Province.mjs";
import {sampleProvinceData} from "./sample.mjs";
import {Producer} from "./Producer.mjs";

describe('privince', function () {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });
    test('shortfall', function () {
        expect(asia.shortfall).toBe(5);
    });
    test('profit', () => {
        expect(asia.profit).toBe(230);
    });
    test('change production', () => {
        asia.producers[0].production = 20;
        expect(asia.shortfall).toBe(-6);
        expect(asia.profit).toBe(292);
    });
    test('zero', () => {
        asia.demand = 0;
        expect(asia.shortfall).toBe(-25);
        expect(asia.profit).toBe(0);
    });
    test('negative', () => {
        asia.demand = -1;
        expect(asia.shortfall).toBe(-26);
        expect(asia.profit).toBe(-10);
    });
    test('empty string demand', () => {
        asia.demand = '';
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
    });
    test('', () => {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price: 20
        };
        const prov = new Province(data);
        expect(prov.shortfall).toBe(0);
    });
});

describe('no producers', () => {
    let noProducer;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducer = new Producer(data);
    });
    test('shortfall', () => {
        expect(noProducer.shortfall).toBe(30);
    });
    test('profit', () => {
        expect(noProducer.profit).toBe(0);
    });
});