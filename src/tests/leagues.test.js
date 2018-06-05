import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { Leagues } from '../containers/leagues';
import { fetchLeagues } from '../actions/leagues';
import { fetchLeaguesReducer } from '../reducers/leagues';
import { fetchLeaguesMock } from '../services/mocks/leagues';


configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const rootReducer = combineReducers({
	fetchLeagues: fetchLeaguesReducer
})
const testStore = createStore(rootReducer, applyMiddleware(thunk));


describe('Leagues component', () => {
	it('Should have the title Select a League', () => {
		expect(
			shallow(
				<Provider store={testStore}>
					<Leagues />
				</Provider>
			).exists(<h3>Select a League</h3>)
		).toBe(true);		
	})
})

describe('Leagues actions', () => {
	beforeEach(() => {
		moxios.install();
	})

	afterEach(() => {
		moxios.uninstall();
	})

	it('creates FETCH_LEAGUES_SUCCESS when fetching leagues has been completed', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: fetchLeaguesMock
			});
		});

		const expectedActions = [
			{type: 'FETCH_LEAGUES_SUCCESS', payload: fetchLeaguesMock}
		];

		const store = mockStore({ payload: {} })

		return store.dispatch(fetchLeagues()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});

describe('Leagues reducers', () => {
	it('should return the initial state', () => {
		expect(fetchLeaguesReducer([], {})).toEqual([])
	})

	it('should handle FETCH_LEAGUES_SUCCESS', () => {

		expect(
			fetchLeaguesReducer(
				[],
				{
					type: 'FETCH_LEAGUES_SUCCESS',
					payload: fetchLeaguesMock
				}
			)
		).toEqual(fetchLeaguesMock)
	})
});