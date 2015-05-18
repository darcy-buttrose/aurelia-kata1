/**
 * Created by Darcy on 16/05/2015.
 */
import {Car} from 'model/car';

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
        describe('Car', () => {
            it('should rev engine on start', () => {
                let engine = this.createSpyObj('Engine',['rev']);
                let car = new Car(engine);
                car.start();
                expect(engine.rev).toHaveBeenCalled();
            });
        });
    }
}