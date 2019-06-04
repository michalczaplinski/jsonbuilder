import { expect, assert } from 'chai';
import Builder from './Builder';
import faker from 'faker';

describe('Builder: ', () => {
	it('.getJson: should return the json ', () => {
        let builder = new Builder();
        builder.setPattern("{name:string}");
        let response = builder.getResponse();
        console.log(response);
        expect(response).to.deep.eq({name:response.name})
    });
});


// // let builder = new Builder("{name:string}");
        // // assert.isNotNull(builder.getJson());
        // let s1 = "name:string,other,onemore,other";
        // let s2 = "name:string,word:{class:other},onemore,other";
        // let g1 = s2.match(/([a-z:{}]+)/g);
        // console.log(g1);