import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1',
        name: 'Justin',
        image: "https://i1.wp.com/oxsci.org/wp-content/uploads/2019/05/SMILE.png?w=1024&ssl=1",
        places: '2'
    }];
return(
    <UsersList items={USERS} />
)
}

export default Users;