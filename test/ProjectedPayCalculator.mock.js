/**
 * Created by Darcy on 16/05/2015.
 */
export class ProjectedPayCalculator {
    constructor(env) {
        createSpy = env.createSpy;
        calculate = createSpy('calculate');
    }
}