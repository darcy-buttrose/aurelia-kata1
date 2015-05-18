/**
 * Created by Darcy on 16/05/2015.
 */
import {Invest} from 'model/invest';

export class Test {
    _jasmine = null;
    createSpy = null;
    createSpyObj = null;

    constructor(jasmine) {
        this._jasmine = jasmine;
        let env = jasmine.env;
        describe = env.describe;
        it = env.it;
        expect = env.expect;
        this.createSpy = jasmine.jasmine.createSpy;
        this.createSpyObj = jasmine.jasmine.createSpyObj;
    }

    load () {
        describe('Invest', () => {
            it('should calc projected pay', () => {
                let ppCalc = this.createSpyObj('ProjectedPayCalculator',['calculate']);
                ppCalc.calculate.and.callFake(function(a,b) {
                    if (a == 1 && b == 2) {
                        return 2;
                    } else {
                        return 0;
                    }
                })
                let invest = new Invest(ppCalc);
                invest.combination = 2;
                invest.invest = 1;
                let pp = invest.ProjectedPay;
                expect(pp).toBe(2);
            });
        });
    }
}