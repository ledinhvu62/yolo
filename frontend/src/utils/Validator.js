function Validator(options) {
    function getParent(element, selector) { // lấy ra thẻ cha
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) { // matches(selector) là kiểm tra xem nếu query bằng selector thì kq có element đó k
                return element.parentElement
            }
            element = element.parentElement
        }
    }

    var selectorRules = {} // chứa các key (trùng với selector - chính là trường) có value là mảng chứa kq (là function test) của các rule cho chính selector đó

    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
        var errorMessage
        var rules = selectorRules[rule.selector] // Lấy ra kq (là function test) của các rule cho selector (vd #email sẽ có kq của isRequired, isEmail)

        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](formElement.querySelector(rule.selector + ':checked'))
                    break
                default:
                    errorMessage = rules[i](inputElement.value)
            }
            if (errorMessage) break // gặp lỗi đầu tiên là thoát (vd #email cần validate isRequired, isEmail. Nếu isRequired lỗi thì thoát luôn)
        }
                    
        if (errorMessage) {
            errorElement.innerText = errorMessage
            getParent(inputElement, options.formGroupSelector).classList.add('invalid')
        } else {
            errorElement.innerText = ''
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
        }
        return !errorMessage // convert sang boolean
    }

    var formElement = document.querySelector(options.form)
    
    if (formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault()
            var isFormValid = true

            // Lặp qua từng rule và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector)
                var isValid = validate(inputElement, rule)
                if (!isValid) {
                    isFormValid = false
                }
            })

            if (isFormValid) {
                // submit với js
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]:not([disabled])')
                    var formValues = Array.from(enableInputs).reduce(function(values, input) { // convert NodeList sang array
                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector(`input[name='${input.name}']:checked`).value
                                break
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    if (!values[input.name]) {
                                        values[input.name] = ''
                                    }
                                    return values
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = []
                                }
                                values[input.name].push(input.value)
                                break
                            case 'file':
                                values[input.name] = input.files // .files trả về obj dạng FileList
                                break
                            default:
                                values[input.name] = input.value
                        }
                        return values
                    }, {})
                    options.onSubmit(formValues)
                } else { // submit với hành vi mặc định của trình duyệt
                    formElement.submit()
                }
            }
        }

        options.rules.forEach(function(rule) { // duyệt qua từng rule
            // Lưu kết quả của các rule cho mỗi trường (kq là function test)
            if (Array.isArray(selectorRules[rule.selector])) { // .selector / .test là những key của obj đc return từ các method của Validator
                selectorRules[rule.selector].push(rule.test)
            } else {
                selectorRules[rule.selector] = [rule.test]
            }

            var inputElements = formElement.querySelectorAll(rule.selector) // phải dùng All để lấy hết checkbox / radio có selector trùng nhau

            Array.from(inputElements).forEach(function(inputElement) { // convert NodeList sang array
                if (inputElement) {
                    inputElement.onblur = function() {
                        validate(inputElement, rule)
                    }
    
                    inputElement.oninput = function() {
                        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
                        errorElement.innerText = ''
                        getParent(inputElement, options.formGroupSelector).classList.remove('invalid')
                    }
                }
            })
        })
    }
}

Validator.isRequired = function(selector, message) { // k dùng Validator.prototype.isRequired để add method thì method sẽ nằm ngoài constructor
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    }
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // eslint-disable-line
            return regex.test(value) ? undefined : message || 'Trường này phải là email' // test() ở đây là method có sẵn của regex
        }
    }
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác'
        }
    }
}

export default Validator