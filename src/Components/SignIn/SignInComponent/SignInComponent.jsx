import React, { useEffect, useState } from 'react';
import Logo from './logo-tech2.svg'
import './SignInComponent.scss'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { LoginAction } from '../../Slice/LoginSlice';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

function SignInComponent(props) {
    const userDemo = localStorage.getItem('demo-login')
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (userDemo) {
            navigate(-1)
        }
    }, [])

    const onSubmit = async (data) => {
        let userData = {
            email: data.email.toLowerCase(),
            password: data.password
        }
        const action = LoginAction(userData);
        const originalPromiseResult = await dispatch(action);
        const user = unwrapResult(originalPromiseResult);
        if (user) {
            navigate(-1)
        }
    }
    const schema = yup.object().shape({
        email: yup.string().required("Vui lòng điền email").test(
            'Email không hợp lệ', "Email không hợp lệ", (value) => {
                // validate email, copy regex
                let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return value.match(mailFormat);
            }
        ),
        password: yup.string().required("Vui lòng điền password").test(
            'Password phải trên 5 kí tự', "Password phải trên 5 kí tự", (value) => {
                return value.length > 5;
            }
        ),
    }).required();

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    return (
        <>
            <div className="sign-in__dialog">
                <div className="dialog-content">
                    <img src={Logo} alt="logo" />
                    <h5>ĐĂNG NHẬP HỆ THỐNG</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="text-field">
                            <input type="text" label="Email" placeholder="Enter email..." {...register("email", { required: true })}></input >
                            <p>{errors.email?.message}</p>
                        </div>
                        <div className="text-field">
                            <input type="password" label="Password" placeholder="Enter password..."  {...register("password", { required: true })}></input >
                            <p>{errors.password?.message}</p>
                        </div>
                        <button type="submit" className="form-btn">Đăng Nhập</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignInComponent;