const colors = [
    {
        name: 'Be',
        hexCode: 'red',
    },
    {
        name: 'Cam',
        hexCode: '#ec7f3e',
    },
    {
        name: 'Đen',
        hexCode: '#000000',
    },
    {
        name: 'Đỏ',
        hexCode: '#e23041',
    },
    {
        name: 'Hồng',
        hexCode: '#f0adb1',
    },
    {
        name: 'Nâu',
        hexCode: 'red',
    },
    {
        name: 'Tím',
        hexCode: 'red',
    },
    {
        name: 'Trắng',
        hexCode: '#ffffff',
    },
    {
        name: 'Vàng',
        hexCode: '#f5ebc7',
    },
    {
        name: 'Xám',
        hexCode: 'red',
    },
    {
        name: 'Xanh dương',
        hexCode: '#0e76c0',
    },
    {
        name: 'Xanh lá',
        hexCode: 'red',
    },
]

const getAllColors = () => colors

const getColor = (color) => colors.find(clr => clr.name === color)

const colorOrder = colors.map(color => color.name)

const getColorIndex = (color) => colorOrder.indexOf(color)

const sortColors = (arr) => arr.sort((a, b) => colorOrder.indexOf(a) - colorOrder.indexOf(b))

const colorData = {
    getAllColors,
    getColor,
    getColorIndex,
    sortColors,
}

export default colorData