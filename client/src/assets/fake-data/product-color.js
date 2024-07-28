const colors = [
    {
        name: 'Be',
        hexCode: '#fbf3ec',
    },
    {
        name: 'Cam',
        hexCode: '#f36b26',
    },
    {
        name: 'Đen',
        hexCode: '#000000',
    },
    {
        name: 'Đỏ',
        hexCode: '#e7352b',
    },
    {
        name: 'Hồng',
        hexCode: '#f0728f',
    },
    {
        name: 'Nâu',
        hexCode: '#825d41',
    },
    {
        name: 'Tím',
        hexCode: '#8d429f',
    },
    {
        name: 'Trắng',
        hexCode: '#ffffff',
    },
    {
        name: 'Vàng',
        hexCode: '#fed533',
    },
    {
        name: 'Xám',
        hexCode: '#b3b3b3',
    },
    {
        name: 'Xanh dương',
        hexCode: '#0d74c4',
    },
    {
        name: 'Xanh lá',
        hexCode: '#079a64',
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