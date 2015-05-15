import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {ConventionalViewStrategy} from 'aurelia-framework';

export class App {
    constructor() {
        ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
            return moduleId.replace('model', 'view') + '.html';
        };
    }
/*
    ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
        return moduleId.replace('model', 'view') + '.html';
    };
*/
    configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  moduleId: './model/welcome',      nav: true, title:'Welcome' },
      { route: ['invest'],  moduleId: './model/invest',           nav: true, title:'Invest' },
    ]);

    this.router = router;
  }
}
