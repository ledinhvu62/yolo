import removeVietnameseTones from '../../utils/removeVietnameseTones'

const getProductByKeyword = (keywordSearch) => {
    const keywordStandard = removeVietnameseTones(keywordSearch)
    if (!keywordStandard) {
        return []
    }

    const keywords = keywordStandard.split(' ')
    return products.filter((product) => {
        return keywords.some((keyword) => product.slug.toLowerCase().includes(keyword.toLowerCase()))
    })
}

const productData = {
    getProductByKeyword,
}

export default productData