import Axios from 'axios';
import react, { useEffect, useState } from 'react';
import {useHistory, useParams}  from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {

    let history = useHistory();

    const {id} = useParams();
    

    const [user, setUsers] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        phone: "",
        website: "",
        company: "",
    });

    const { name, username, email, address, phone, website, company } = user;


    const onInputChaange = e => {
        setUsers({...user,[e.target.name]:e.target.value});
    };

    useEffect(() => {

        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3002/users/${id}`, user);
        history.push("/")
        
        
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3002/users/${id}`);
        setUsers(result.data);
        
    }
    return (
        <div>
           <div className="container my-5">
                <form onSubmit={e => onSubmit(e)} >
                <div className="form-group">
                        <label for="formGroupExampleInput2">Full Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Fullname"
                            name="name"
                            value={user.name}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">User Name</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Example input placeholder"
                            name="username"
                            value={user.username}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Email</label>
                        <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                            name="email"
                            value={user.email}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Adress</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                            name="address"
                            value={user.address}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Phone</label>
                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                            name="phone"
                            value={user.phone}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Website</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                            name="website"
                            value={user.website}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Company</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"
                            name="company"
                            value={user.company}
                            onChange={e => onInputChaange(e)}
                        />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
       </div>
    );
};

export default EditUser;