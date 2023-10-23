const sizes = [
    {
        display: 'S',
        size: 's',
    },
    {
        display: 'M',
        size: 'm',
    },
    {
        display: 'L',
        size: 'l',
    },
    {
        display: 'XL',
        size: 'xl',
    },
]

const getAllSizes = () => sizes

const getSize = (size) => sizes.find(sz => sz.size === size)

const sizeData = {
    getAllSizes,
    getSize,
}

export default sizeData