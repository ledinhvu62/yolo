import React, { useEffect } from 'react'

import Helmet from '../components/Helmet'
import Breadcrumbs from '../components/Breadcrumbs'
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
            <Breadcrumbs />
            <div className='contact'>
                <Grid
                    col={2}
                    mdCol={1}
                    smCol={1}
                    gap={20}
                >
                    <iframe
                        className='contact__map'
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502.76786256806145!2d107.08933337097623!3d10.364168815185831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31756fdacd0fd03b%3A0xf18144015e0830dc!2zNTMwIFRyxrDGoW5nIEPDtG5nIMSQ4buLbmgsIFBoxrDhu51uZyA4LCBUaMOgbmggcGjhu5EgVsWpbmcgVOG6p3UsIELDoCBS4buLYSAtIFbFqW5nIFTDoHUsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1698071288187!5m2!1sen!2s'
                        title='Bản đồ'
                    >
                    </iframe>
                    <div className='contact__form'>
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
                                        spellCheck={false}
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
                                        spellCheck={false}
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
                                    spellCheck={false}
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
        </Helmet>
    )
}

export default Contact