import React, { useState } from 'react';
import './Register.css'
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const registerUser = (user) => {
        console.log(user);
    };

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <form className="h-100 mt-5 bg-primary p-3 w-50" onSubmit={handleSubmit(registerUser)}>
                        <h3 className="text-center text-light">Register</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername" className="form-label text-light">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputUsername"
                                {...register('username', { required: true, minLength: 3, maxLength: 20 })}
                            />
                            {errors.username && <p className="text-danger">Username must be between 3 and 20 characters</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label text-light">
                                Email address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                {...register('email', { required: true, pattern: /^[A-Za-z]{3,20}[0-9]{1,6}(@)(gmail|yahoo)(.com)$/i })}
                            />
                            {errors.email && <p className="text-danger">Invalid email</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-light">
                                Password
                            </label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    autoComplete="off"
                                    {...register('password', {
                                        required: true,
                                        minLength: 8,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    })}
                                />
                                <span
                                    className="input-group-text"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                            {errors.password && (
                                <p className="text-danger">
                                    Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, and be at least 8 characters long.
                                </p>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputConfirmPassword1" className="form-label text-light">
                                Confirm Password
                            </label>
                           <div className="input-group">
                           <input
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="off"
                                className="form-control"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === register('password'),
                                })}
                            />
                             <span
                                    className="input-group-text"
                                    onClick={togglePasswordVisibility}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                           </div>
                            {errors.confirmPassword && <p className="text-danger">Passwords do not match</p>}
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-info px-4">
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
