/**
 * Created by Darcy on 14/05/2015.
 */
import {inject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-framework';
import {ProjectedPayCalculator} from 'calculators/ProjectedPayCalculator';

@inject(ProjectedPayCalculator)
export class Invest {
    heading = 'Investment';
    invest = 0;
    combination = 0;

    constructor(ProjectedPayCalculator) {
        this.ProjectedPayCalculator = ProjectedPayCalculator;
    }

    @computedFrom('invest', 'combination')
    get ProjectedPay() {
        return this.ProjectedPayCalculator.calculate(this.invest,this.combination)
    }
}