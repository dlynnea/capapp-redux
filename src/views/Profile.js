import React, {Component} from 'react';

class Profile extends Component {

    state = {
        bookmarks: []
    }
// getBookmarks = () => {
//     fetch('http://localhost/profile', {
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json'
//         },
//         body: JSON.stringify()
//     })
// }

    render() { 
        return (  
            <>
            <h1>PROFILE</h1>
            </>
        );
    }
}
 
export default Profile;