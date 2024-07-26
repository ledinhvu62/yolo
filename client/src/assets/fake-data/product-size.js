const sizes = [
    {
        display: 'S',
        size: '01-s',
    },
    {
        display: 'M',
        size: '02-m',
    },
    {
        display: 'L',
        size: '03-l',
    },
    {
        display: 'XL',
        size: '04-xl',
    },
]

const getAllSizes = () => sizes

const getSize = (size) => sizes.find(sz => sz.size === size)

const sizeData = {
    getAllSizes,
    getSize,
}

export default sizeData