import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {ConventionalViewStrategy} from 'aurelia-framework';

@inject(Router)
export class App {
    constructor(router) {
        this.router = router;
        ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
            return moduleId.replace('model', 'view') + '.html';
        };
        this.router.configure(config => {
            config.title = 'Aurelia';
            config.map([
                { route: ['','welcome'],  moduleId: './model/welcome',      nav: true, title:'Welcome' },
                { route: ['invest'],        moduleId: './model/invest',      nav: true, title:'Invest' },
            ]);
        });
    }
}
