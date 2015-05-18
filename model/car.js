/**
 * Created by Darcy on 17/05/2015.
 */
import {Engine} from 'model/engine';

export class Car {
    _engine = null;
    static inject() {return [Engine];}
    constructor(engine) {
        this._engine = engine;
    }

    start() {
        this._engine.rev();
    }
}