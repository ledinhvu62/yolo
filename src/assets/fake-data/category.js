const categories = [
    {
        display: 'Áo polo',
        categorySlug: 'ao-polo',
    },
    {
        display: 'Áo thun',
        categorySlug: 'ao-thun',
    },
    {
        display: 'Áo sơ mi',
        categorySlug: 'ao-so-mi',
    },
]

const getAllCategories = () => categories

const getCategory = (slug) => categories.find(category => category.categorySlug === slug)

const categoryData = {
    getAllCategories,
    getCategory,
}

export default categoryData