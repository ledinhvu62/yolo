const navigation = [
    {
        display: 'Sản phẩm',
        path: 'catalog',
    },
    {
        display: 'Áo 2 dây',
        path: 'ao-2-day',
    },
    {
        display: 'Áo polo',
        path: 'ao-polo',
    },
    {
        display: 'Áo thun',
        path: 'ao-thun',
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