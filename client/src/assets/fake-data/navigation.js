const navigation = [
    {
        display: 'Sản phẩm',
        path: 'catalog',
    },
    {
        display: 'Áo thun',
        path: 'ao-thun',
    },
    {
        display: 'Áo polo',
        path: 'ao-polo',
    },
    {
        display: 'Áo sơ mi',
        path: 'ao-so-mi',
    },
    {
        display: 'Liên hệ',
        path: 'contact',
    },
]

const getAllNavigation = () => navigation

const getNavigation = (path) => navigation.find(item => item.path === path)

const navigationData = {
    getAllNavigation,
    getNavigation,
}

export default navigationData