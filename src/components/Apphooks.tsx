import React, { useState,useEffect, Dispatch } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUser } from '../actions';
import { StoreState, User } from '../interfaces';




export default function Apphooks(): JSX.Element {
    const dispatch: Dispatch <any> = useDispatch()
    const users = useSelector <StoreState,User[]>( (state) => state.users)

	// useEffect(() => {
	// 	props.fetchUsers();
	// }, []);

	return (
		<div>
			<button onClick={() => dispatch(fetchUsers())}>FETCH USERS!</button>
			{users.map((user: User) => {
				return (
					<div key={user.id}>
						{user.id}) {user.name}
                        <button onClick={() => dispatch(deleteUser(user.id))}>X</button>
					</div>
				);
			})}
		</div>
	);
}

