import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { User, StoreState } from '../interfaces';


interface AppProps {
	users: User[];
	fetchUsers(): any;
}

function App(props: AppProps): JSX.Element {

	// useEffect(() => {
	// 	props.fetchUsers();
	// }, []);

	return (
		<div>
			<button onClick={props.fetchUsers}>FETCH USERS!</button>
			{props.users.map((user: User) => {
				return (
					<div key={user.id}>
						{user.id}) {user.name}
					</div>
				);
			})}
		</div>
	);
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
	return {
		users: state.users
	};
};

export default connect(mapStateToProps, { fetchUsers })(App);
