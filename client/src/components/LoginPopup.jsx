import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { set } from '../redux/token/tokenSlice'
import axios from 'axios'

const LoginPopup = ({ setShowLogin }) => {

    // Tạo biến tạm
    const url = 'http://localhost:4000'

    const [title, setTitle] = useState('Đăng nhập')
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const dispatch = useDispatch()

    const onLogin = async (event) => {
        event.preventDefault()

        let newUrl = url
        if (title === 'Đăng nhập') {
            newUrl += '/api/user/login'
        }
        else {
            newUrl += '/api/user/register'
        }

        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            dispatch(set(response.data.token))
            setShowLogin(false)
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div className='login__popup'>
            <form onSubmit={onLogin} className='login__popup__container'>
                <div className='login__popup__title'>
                    <h2>{title}</h2>
                    <i onClick={() => setShowLogin(false)} className='bx bx-x'></i>
                </div>
                <div className='login__popup__inputs'>
                    {title === 'Đăng ký' ? <input onChange={onChangeHandler} value={data.name} type='text' placeholder='Tên của bạn' name='name' required /> : <></>}
                    <input onChange={onChangeHandler} value={data.email} type='email' name='email' placeholder='Email của bạn' required />
                    <input onChange={onChangeHandler} value={data.password} type='password' name='password' placeholder='Mật khẩu' required />
                </div>
                <button type='submit'>{title === 'Đăng ký' ? 'Tạo tài khoản' : 'Đăng nhập'}</button>
                {title === 'Đăng ký'
                    ? <div className='login__popup__condition'>
                        <input type='checkbox' required />
                        <p>Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật của Yolo</p>
                    </div>
                    : <></>
                }
                {title === 'Đăng ký' ? <span onClick={() => setTitle('Đăng nhập')}>Đã có tài khoản?</span> : <span onClick={() => setTitle('Đăng ký')}>Tạo tài khoản?</span>}
            </form>
        </div>
    )
}

export default LoginPopup