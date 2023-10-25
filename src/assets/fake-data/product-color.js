const colors = [
    {
        display: 'Cam',
        color: 'orange',
    },
    {
        display: 'Đen',
        color: 'black',
    },
    {
        display: 'Đỏ',
        color: 'red',
    },
    {
        display: 'Hồng',
        color: 'pink',
    },
    {
        display: 'Trắng',
        color: 'white',
    },
    {
        display: 'Vàng',
        color: 'yellow',
    },
    {
        display: 'Xanh dương',
        color: 'blue',
    },
    {
        display: 'Xanh ngọc',
        color: 'turquoise',
    },
]

const getAllColors = () => colors

const getColor = (color) => colors.find(clr => clr.color === color)

const colorData = {
    getAllColors,
    getColor,
}

export default colorData