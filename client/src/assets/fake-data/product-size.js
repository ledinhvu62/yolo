const sizes = ['S', 'M', 'L', 'XL']

const getAllSizes = () => sizes

const getSizeIndex = (size) => sizes.indexOf(size)

const sortSizes = (arr) => arr.sort((a, b) => sizes.indexOf(a) - sizes.indexOf(b))

const sizeData = {
    getAllSizes,
    getSizeIndex,
    sortSizes,
}

export default sizeData