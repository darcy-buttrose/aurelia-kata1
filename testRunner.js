/**
 * Created by Darcy on 10/05/2015.
 */
import Jasmine from 'jasmine';
//import JasmineReporters from 'jasmine-reporters';
import SpecReporter from 'jasmine-spec-reporter';
import fs from 'fs-plus';
import fp from 'fsplus';

var jasmine = new Jasmine();
/*
jasmine.env.addReporter(new JasmineReporters.TerminalReporter({
    color: true,
    showStack: false
}));
*/
var reporter = new SpecReporter();
jasmine.env.addReporter(reporter);

let specCount=0;
let config = fp.readJSON('./testRunner.json');
let specFiles = new RegExp(config.specFiles);
let specDir = config.specDir;

fs.listSync(config.specDir).forEach((fileName) => {
    if (fs.isFileSync(fileName)) {
        if (specFiles.test(fileName)) {
            let moduleName = fileName.replace(/\.js$/,'');
            moduleName = moduleName.replace(/\\/,'/');
            moduleName = './' + moduleName;

            specCount++;
            System.import(moduleName).then((_Test) => {
                let tst = new _Test.Test(jasmine);
                tst.load();
                specCount--;
                if (specCount == 0) {
                    done();
                }
            });
        }
    }
});

function done() {
    jasmine.env.execute();
}

