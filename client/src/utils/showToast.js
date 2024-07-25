import { Bounce, toast } from 'react-toastify'

const showToast = (message, type) => {
    const toastOptions = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'light',
        transition: Bounce,
        className: `toast__${type}`,
    }
    type === 'success' ? toast.success(message, toastOptions) : toast.error(message, toastOptions)
}

export default showToast