import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const navigate = useNavigate();

  const hdlChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmit = async (e) => {
    try {
      e.preventDefault();
      // validation
      if (input.password !== input.confirmPassword) {
        return alert('check confirm password');
      }
      // จัด input ส่ง api
      const rs = await axios.post('http://localhost:8889/auth/register', input);
      if (rs.status === 200) {
        alert('Register successful');
      }
      console.log(rs);
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-4xl my-10 text-center">Register Form</h1>
      <form className="border w-3/4 mx-auto p-4 rounded-md">
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Username :</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full"
            name="username"
            value={input.username}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Password :</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full"
            name="password"
            value={input.password}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Confirm Password :</span>
          </div>
          <input
            type="password"
            className="input input-bordered w-full"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChange}
          />
        </label>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">E-mail :</span>
          </div>
          <input
            type="email"
            className="input input-bordered w-full"
            name="email"
            value={input.email}
            onChange={hdlChange}
          />
        </label>
        <button className="btn btn-outline btn-primary mt-6 w-full" onClick={hdlSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}
