import { useState } from "react";

const Login = () => {
    const [field, setField] = useState({ email: '', password: '' });

    const onFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const name = e.target.name;

        setField({ ...field, [name]: val });
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                name="email"
                onChange={onFieldChange}
                placeholder="Email"
                value={field.email}
            />
            <input
                type="password"
                name="password"
                onChange={onFieldChange}
                placeholder="Password"
                value={field.password}
            />
            <button>Log In</button>
        </div>
    );
};

export default Login;