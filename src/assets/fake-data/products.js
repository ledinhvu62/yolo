import removeVietnameseTones from '../../utils/removeVietnameseTones'

const product_01_image_01 = require('../images/products/product-01 (1).jpg')
const product_01_image_02 = require('../images/products/product-01 (2).jpg')

const product_02_image_01 = require('../images/products/product-02 (1).jpg')
const product_02_image_02 = require('../images/products/product-02 (2).jpg')

const product_03_image_01 = require('../images/products/product-03 (1).jpg')
const product_03_image_02 = require('../images/products/product-03 (2).jpg')

const product_04_image_01 = require('../images/products/product-04 (1).jpg')
const product_04_image_02 = require('../images/products/product-04 (2).jpg')

const product_05_image_01 = require('../images/products/product-05 (1).jpg')
const product_05_image_02 = require('../images/products/product-05 (2).jpg')

const product_06_image_01 = require('../images/products/product-06 (1).jpg')
const product_06_image_02 = require('../images/products/product-06 (2).jpg')

const product_07_image_01 = require('../images/products/product-07 (1).jpg')
const product_07_image_02 = require('../images/products/product-07 (2).jpg')

const product_08_image_01 = require('../images/products/product-08 (1).jpg')
const product_08_image_02 = require('../images/products/product-08 (2).jpg')

const product_09_image_01 = require('../images/products/product-09 (1).jpg')
const product_09_image_02 = require('../images/products/product-09 (2).jpg')

const product_10_image_01 = require('../images/products/product-10 (1).jpg')
const product_10_image_02 = require('../images/products/product-10 (2).jpg')

const product_11_image_01 = require('../images/products/product-11 (1).jpg')
const product_11_image_02 = require('../images/products/product-11 (2).jpg')

const product_12_image_01 = require('../images/products/product-12 (1).jpg')
const product_12_image_02 = require('../images/products/product-12 (2).jpg')

const product_13_image_01 = require('../images/products/product-13 (1).jpg')
const product_13_image_02 = require('../images/products/product-13 (2).jpg')

const product_14_image_01 = require('../images/products/product-14 (1).jpg')
const product_14_image_02 = require('../images/products/product-14 (2).jpg')

const product_15_image_01 = require('../images/products/product-15 (1).jpg')
const product_15_image_02 = require('../images/products/product-15 (2).jpg')

const product_16_image_01 = require('../images/products/product-16 (1).jpg')
const product_16_image_02 = require('../images/products/product-16 (2).jpg')

const products = [
    {
        title: "Áo Thun Clean Việt Nam 1",
        price: '329000',
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["turquoise", "blue", "white"],
        slug: "ao-thun-clean-viet-nam-1",
        size: ["s", "m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Croptop 1",
        price: '199000',
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "black", "blue"],
        slug: "ao-thun-croptop-1",
        size: ["s"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Dập Chữ Nổi",
        price: '299000',
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["turquoise", "black"],
        slug: "ao-thun-dap-chu-noi",
        size: ["s", "m"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Yoguu 1",
        price: '329000',
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["orange", "black", "turquoise", "white"],
        slug: "ao-thun-yoguu-1",
        size: ["l", "xl"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun In Gấu",
        price: '249000',
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-in-gau",
        size: ["s"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun In Tràn",
        price: '369000',
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["orange", "turquoise"],
        slug: "ao-thun-in-tran",
        size: ["s", "m"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Nỉ Dài Tay 1",
        price: '539000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-ni",
        colors: ["blue", "black"],
        slug: "ao-ni-dai-tay-1",
        size: ["m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Polo Siro Rayon 1",
        price: '349000',
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-polo",
        colors: ["red", "black", "orange", "white"],
        slug: "ao-polo-siro-rayon-1",
        size: ["s", "m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Croptop 2",
        price: '199000',
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-thun",
        colors: ["black", "blue", "white"],
        slug: "ao-thun-croptop-2",
        size: ["s"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Yoguu 2",
        price: '329000',
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "ao-thun",
        colors: ["turquoise", "black", "orange", "white"],
        slug: "ao-thun-yoguu-2",
        size: ["l", "xl"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Clean Việt Nam 2",
        price: '329000',
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "ao-thun",
        colors: ["blue", "turquoise", "white"],
        slug: "ao-thun-clean-viet-nam-2",
        size: ["s", "m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Nỉ Dài Tay 2",
        price: '539000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "ao-ni",
        colors: ["black", "blue"],
        slug: "ao-ni-dai-tay-2",
        size: ["m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Ignite",
        price: '349000',
        image01: product_13_image_01,
        image02: product_13_image_02,
        categorySlug: "ao-thun",
        colors: ["black", "white"],
        slug: "ao-thun-ignite",
        size: ["m"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Polo Siro Rayon 2",
        price: '349000',
        image01: product_14_image_01,
        image02: product_14_image_02,
        categorySlug: "ao-polo",
        colors: ["white", "black", "orange", "red"],
        slug: "ao-polo-siro-rayon-2",
        size: ["s", "m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Thun Croptop 3",
        price: '199000',
        image01: product_15_image_01,
        image02: product_15_image_02,
        categorySlug: "ao-thun",
        colors: ["blue", "black", "white"],
        slug: "ao-thun-croptop-3",
        size: ["s"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    {
        title: "Áo Polo Siro Rayon 3",
        price: '349000',
        image01: product_16_image_01,
        image02: product_16_image_02,
        categorySlug: "ao-polo",
        colors: ["black", "orange", "red", "white"],
        slug: "ao-polo-siro-rayon-3",
        size: ["s", "m", "l"],
        description: `
        <div>
            <p>- Áo thun nữ form suông rộng thoải mái, thành phần: 60% Cotton + 20% Polyester + 20% Recycle Polyester.</p>
            <p>- Chất liệu cotton tái chế bảo vệ môi trường, rất mềm mại, thấm hút tốt.</p>
            <p>- Áo có hình in đặc trưng cho bộ sưu tập chất liệu tái chế, tuyên truyền và nâng cáo nhận thức môi trường.</p>
            <p>- Phong cách trẻ trung năng động, thích hợp mọi dáng người.</p>
            <p>- Có thể mặc cùng trang phục hàng ngày như: quần jeans, short,... thoải mái đi chơi, đi làm, ở nhà.</p>
            <p>- Sản xuất tại Việt Nam.</p>
        </div>        
        `
    },
    // 16 products
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }

    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

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
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo,
    getProductByKeyword
}

export default productData