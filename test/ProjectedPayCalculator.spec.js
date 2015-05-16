/**
 * Created by Darcy on 14/05/2015.
 */
import {ProjectedPayCalculator} from 'calculators/ProjectedPayCalculator';

export class Test {
    constructor(env) {
        describe = env.describe;
        it = env.it;
        expect = env.expect;
    }

    load () {
        describe('ProjectedPayCalculator',() => {
            it('should multiply invest with combination', () => {
                let calculatorUnderTest = new ProjectedPayCalculator();
                expect(calculatorUnderTest.calculate(1,2)).toBe(2);
                expect(calculatorUnderTest.calculate(2,2)).toBe(4);
            });
        });
    }
}
