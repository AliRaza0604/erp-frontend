import logo from "../svg/ERP.svg"
import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router';

let instance = axios.create({
    baseURL: 'https://ssm-erp-backend.herokuapp.com',
    headers: {
        post: {
            'Content-Type': 'application/json'
        },
        get: {
            'Content-Type': 'application/json'
        }
    }
})



export default function Login() {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [depid, setdepid] = useState();
  const [loggedIn, setloggedIn] = useState(false);
  const [token, settoken] = useState('');
  const [pk,setpk] = useState('');
  // const [type, settype] = useState('');

  const history = useHistory();

  const submitForm = async (e) => {
    e.preventDefault();

    var elementButton = document.getElementById('loginButton');
    elementButton.classList.remove('bg-purple-800', 'hover:bg-purple-600', 'hover:shadow-md');
    elementButton.classList.add('bg-gray-400', 'pointer-events-none');

    try {
        let res = await instance.post('/api-token-auth/', {
            username,
            password
        })
        console.log(res);
        setloggedIn(true);
        settoken(res.data.token);
        setpk(res.data.pk);

        res = await instance.get(`/api/staff/username/${username}/`);

        // settype(res.data.role);
        // setusername(res.data.username);
        setdepid(res.data[0].depid);
        console.log(res);


        history.push('/dashboard');
    }
    catch (e) {
        alert("Invalid username or password!");
        elementButton.classList.add('bg-purple-800', 'hover:bg-purple-600', 'hover:shadow-md');
        elementButton.classList.remove('bg-gray-400', 'pointer-events-none');
    }
  }

  useEffect(()  => {
    localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    localStorage.setItem('token', token);
    // localStorage.setItem('type', type);
    localStorage.setItem('username', username);
    localStorage.setItem('depid', depid);
    localStorage.setItem('pk', pk);
  }, [loggedIn, token, username, depid, pk])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 z-10">
          <img
            className="mx-auto h-24 w-auto"
            src={logo}
            alt="ERP"
          />
        </div>
        <div className="absolute top-0 w-full h-24  bg-primary">
            <h1 className="mt-6 text-4xl text-center text-text3">Manage Your Business Better</h1>
        </div>
      <div className="max-w-md w-full space-y-8">
        <div className="p-8 bg-gray-50 border-4 border-solid rounded-lg border-primary">
        <div>
          {/* <img
            className="mx-auto h-12 w-auto"
            src={logo}
            alt="ERP"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-text2">LOGIN</h2>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-text2">Sign in to your account</h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={submitForm}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                value={username} 
                onChange={(e) => setusername(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary placeholder-secondary text-text2 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password} 
                onChange={(e) => setpassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-secondary placeholder-secondary text-text2 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-secondary rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-text2">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-text2 hover:text-primary">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              id="loginButton"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-text1 bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span> */}
              Sign in
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
