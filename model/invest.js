/**
 * Created by Darcy on 14/05/2015.
 */
import {ProjectedPayCalculator} from 'calculators/ProjectedPayCalculator';

export class Invest {
    heading = 'Investment';
    invest = 0;
    combination = 0;

    static inject() {return [ProjectedPayCalculator];}
    constructor(projectedPayCalculator) {
        this.projectedPayCalculator = projectedPayCalculator;
    }

    get ProjectedPay() {
        return this.projectedPayCalculator.calculate(this.invest,this.combination)
    }
}