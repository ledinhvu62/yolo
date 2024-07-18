const colors = [
    {
        display: 'Be',
        color: 'beige',
    },
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
        display: 'Nâu',
        color: 'brown',
    },
    {
        display: 'Tím',
        color: 'purple',
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
        display: 'Xám',
        color: 'gray',
    },
    {
        display: 'Xanh dương',
        color: 'blue',
    },
    {
        display: 'Xanh lá',
        color: 'green',
    },
]

const getAllColors = () => colors

const getColor = (color) => colors.find(clr => clr.color === color)

const colorData = {
    getAllColors,
    getColor,
}

export default colorData