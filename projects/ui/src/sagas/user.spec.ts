
// import * as sinon from 'sinon';
import { expect } from 'chai';

import { rootSaga, loadUser, loadSearches } from './index';
import { fork, call, take, put } from 'redux-saga/effects';
import { UserServices } from '../services/users';
import { UserActions, UserActionTypes } from '../actions/index';


describe('loadUser', () => {

    const saga = loadUser();

    it('should take fetch begin', () => {
        let output = saga.next().value
        let expected = take(UserActionTypes.FETCH_BEGIN)
        expect(output).to.be.deep.equal(expected)
    });

    
    it('should call getUser', () => {
        let output = saga.next().value;
        let expected = call(UserServices.getUser);
        expect(output).to.be.deep.equal(expected)
    });

    it('should put success action', (done) => {
        const user = {id: 1001, name: "Harry Potter"}
        let output = saga.next(user).value;
        let expected =  put(UserActions.fetchSuccess(user))
        done();
        expect(output).to.be.deep.equal(expected)
    });

    it('should done', (done) => {
        let finished = saga.next().done;
        done();
        expect(finished).to.be.equal(true);
    });

});


// describe('rootSaga', () => {
//     it('launches loadSearch task', () => {
//         const saga = loadSearches();

//         let output = saga.next({user: {id: 1001, name: "Harry Potter"}}).value;
//         let expected = take(UserActionTypes.FETCH_SUCCESS);
        
//         console.log("exx", JSON.stringify(expected));
//         console.log("output", JSON.stringify(output));

//         expect(output).equal(expected)

//         let finished = saga.next().done;
//         expect(finished).to.be.equal(true);
//     });
// });
