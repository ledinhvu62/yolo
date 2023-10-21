import React, { useEffect } from 'react'

import Helmet from '../components/Helmet'
import Grid from '../components/Grid'
import Button from '../components/Button'

import Validator from '../utils/Validator'

const Contact = () => {
    useEffect(() => {
        Validator({
            form: '#contact-form',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#fullname'),
                Validator.isRequired('#email'),
                Validator.isEmail('#email'),
                Validator.isRequired('#content'),
            ],
            onSubmit: function (data) {
                // Call API
                console.log(data)
                alert('Gửi phản hồi thành công')
            },
        })
    }, [])

    return (
        <Helmet title='Liên hệ'>
            <div className='contact'>
                <div className='contact__map-and-form'>
                    <Grid
                        col={2}
                        mdCol={1}
                        smCol={1}
                        gap={20}
                    >
                        <iframe
                            className='contact__map-and-form__map'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9345044803295!2d106.69840331468407!3d10.816324261413957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752894a699dd79%3A0xdae7c91c662edf42!2s04%20Phan%20Chu%20Trinh!5e0!3m2!1sen!2s!4v1664000116334!5m2!1sen!2s'
                            title='Bản đồ'
                        >
                        </iframe>
                        <div className='contact__map-and-form__form'>
                            <form
                                action=''
                                method='POST'
                                id='contact-form'
                                className='form'
                            >
                                <Grid
                                    col={2}
                                    mdCol={1}
                                    smCol={1}
                                    gap={20}
                                >
                                    <div className='form-group'>
                                        <label
                                            className='form-label'
                                            htmlFor='fullname'
                                        >
                                            Họ và tên 
                                            <em> *</em>
                                        </label>
                                        <input
                                            id='fullname'
                                            className='form-control'
                                            name='fullname'
                                            type='text'
                                        />
                                        <span className='form-message'></span>
                                    </div>
                                    <div className='form-group'>
                                        <label
                                            className='form-label'
                                            htmlFor='email'
                                        >
                                            Email
                                            <em> *</em>
                                        </label>
                                        <input
                                            id='email'
                                            className='form-control'
                                            name='email'
                                            type='email'
                                        />
                                        <span className='form-message'></span>
                                    </div>
                                </Grid>
                                <div className='form-group'>
                                    <label
                                        className='form-label'
                                        htmlFor='content'
                                    >
                                        Nội dung
                                        <em> *</em>
                                    </label>
                                    <textarea
                                        id='content'
                                        className='form-control form-textarea'
                                        name='content'
                                        type='text'
                                    />
                                    <span className='form-message'></span>
                                </div>
                                <Button size='block'>
                                    Gửi
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </div>
            </div>
        </Helmet>
    )
}

export default Contact