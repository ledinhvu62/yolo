const categories = [
    {
        display: 'Áo 2 dây',
        categorySlug: 'ao-2-day',
    },
    {
        display: 'Áo polo',
        categorySlug: 'ao-polo',
    },
    {
        display: 'Áo thun',
        categorySlug: 'ao-thun',
    },
]

const getAllCategories = () => categories

const getCategory = (slug) => categories.find(category => category.categorySlug === slug)

const categoryData = {
    getAllCategories,
    getCategory,
}

export default categoryData