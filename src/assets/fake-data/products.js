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
            </div>    
        `,
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
                <p>- Áo croptop nữ cá tính với chữ in nổi bật trước ngực, in puff tạo hiệu ứng nổi đặc biệt.</p>
                <p>- Thiết kế phần nách được cắt cách điệu, thoải mái.</p>
                <p>- Chất liệu thun rib co giãn tốt, giữ form khi mặc.</p>
                <p>- Có thể phối theo phong cách cá tính với quần suông, jogger, chân váy, quần jeans hay phong cách cơ bản cùng jeans, chân váy, quần short.</p>
                <p>- Thích hợp mặc đi chơi, đi làm hoặc đi học.</p>
            </div>
        `,
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
                <p>- Chất liệu 100% Cotton.</p>
                <p>- Thấm hút mồ hôi tốt, thoáng mát, rất thích hợp với thời tiết nóng ẩm Việt Nam.</p>
                <p>- Co giãn nhẹ, phù hợp với chuyển động của cơ thể.</p>
                <p>- Form dáng suông giúp tạo sự thoải mái cử động cho người mặc.</p>
                <p>- Đa dạng màu sắc dễ dàng kết hợp cùng quần shorts hoặc quần jeans.</p>
            </div>
        `,
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
                <p>- Áo thun YOGUU dấu ấn khằng định chất riêng thế hệ trẻ.</p>
                <p>- Chiếc áo sở hữu tinh thần tươi mới: YOung - Gout - Unisex - Unique.</p>
                <p>- Vải cotton 100% được kéo sợi theo công nghệ Compact, sợi được trồng bằng phương pháp khoa học - kỹ thuật cao nên tạo ra xơ bông dai và dài hơn.</p>
                <p>- Sợi xoắn từ những xơ bông dài và chắc giúp giảm tối đa độ xù lông trên bề mặt vải.</p>
                <p>- Áo có khả năng thấm hút mồ hôi tốt, thoáng mát thích hợp với thời tiết nóng ẩm của Việt Nam.</p>
            </div>
        `,
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
                <p>- Áo thun nữ Cotton BCI (tổ chức phi lợi nhuận toàn cầu về chương trình bông bền vững).</p>
                <p>- Giảm thiểu 50-80% hóa chất so với bông thông thường.</p>
                <p>- Chất lượng được kiểm soát và đảm bảo theo tiêu chuẩn quốc tế.</p>
                <p>- An toàn thân thiện với da.</p>
                <p>- Mềm mại, bề mặt vải bông xốp.</p>
                <p>- Thông thoáng, thấm hút, độ bền cao.</p>
            </div>
        `,
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
                <p>- Một thiết kế áo phông nữ kiểu dáng freesize - rộng rãi, thoải mái.</p>
                <p>- Chất liệu 100% Cotton mềm mại được cả thế giới tin dùng.</p>
                <p>- Áo có khả năng thấm hút tốt, mềm và mát.</p>
                <p>- Do được trồng bằng phương pháp khoa học, kỹ thuật cao nên vảo Cotton Mỹ có các xơ bông dai và dài hơn tạo nên kết cấu nhẹ và thông thoáng khi mặc.</p>
            </div>
        `,
    },
    {
        title: "Áo 2 Dây Dáng Ôm 1",
        price: '149000',
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-2-day",
        colors: ["yellow", "white"],
        slug: "ao-2-day-dang-om-1",
        size: ["s", "m"],
        description: `
            <div>
                <p>- Áo 2 dây nữ dáng ôm khoẻ khoắn, năng động.</p>
                <p>- Thành phần: 95% Cotton + 5% Spandex.</p>
                <p>- Chất vải thấm hút mồ hôi tốt, co giãn, đàn hồi ôm theo đường cong cơ thể.</p>
                <p>- Thích hợp mặc ở nhà, mặc phối đồ đa dạng đi chơi, tập luyện thể thao.</p>
            </div>
        `,
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
                <p>- Áo polo nữ bo kẻ hiện đại, mềm thoáng.</p>
                <p>- Công nghệ Siro compact với mật độ xơ cao, được xoắn gọn gàng và xe đôi nên bề mặt vải mịn màng.</p>
                <p>- Hạn chế xù lông hơn 17% và bền hơn 20% so với các loại vải khác cùng dòng.</p>
                <p>- Sản phẩm dễ chăm sóc, có thể giặt máy.</p>
            </div>
        `,
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
                <p>- Áo croptop nữ cá tính với chữ in nổi bật trước ngực, in puff tạo hiệu ứng nổi đặc biệt.</p>
                <p>- Thiết kế phần nách được cắt cách điệu, thoải mái.</p>
                <p>- Chất liệu thun rib co giãn tốt, giữ form khi mặc.</p>
                <p>- Có thể phối theo phong cách cá tính với quần suông, jogger, chân váy, quần jeans hay phong cách cơ bản cùng jeans, chân váy, quần short.</p>
                <p>- Thích hợp mặc đi chơi, đi làm hoặc đi học.</p>
            </div>
        `,
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
                <p>- Áo thun YOGUU dấu ấn khằng định chất riêng thế hệ trẻ.</p>
                <p>- Chiếc áo sở hữu tinh thần tươi mới: YOung - Gout - Unisex - Unique.</p>
                <p>- Vải cotton 100% được kéo sợi theo công nghệ Compact, sợi được trồng bằng phương pháp khoa học - kỹ thuật cao nên tạo ra xơ bông dai và dài hơn.</p>
                <p>- Sợi xoắn từ những xơ bông dài và chắc giúp giảm tối đa độ xù lông trên bề mặt vải.</p>
                <p>- Áo có khả năng thấm hút mồ hôi tốt, thoáng mát thích hợp với thời tiết nóng ẩm của Việt Nam.</p>
            </div>
        `,
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
            </div>
        `,
    },
    {
        title: "Áo 2 Dây Dáng Ôm 2",
        price: '149000',
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "ao-2-day",
        colors: ["white", "yellow"],
        slug: "ao-2-day-dang-om-2",
        size: ["s", "m"],
        description: `
            <div>
                <p>- Áo 2 dây nữ dáng ôm khoẻ khoắn, năng động.</p>
                <p>- Thành phần: 95% Cotton + 5% Spandex.</p>
                <p>- Chất vải thấm hút mồ hôi tốt, co giãn, đàn hồi ôm theo đường cong cơ thể.</p>
                <p>- Thích hợp mặc ở nhà, mặc phối đồ đa dạng đi chơi, tập luyện thể thao.</p>
            </div>
        `,
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
                <p>- Chất liệu Bột Ngô: 80% Cotton + 20% Polyester I-scra Softcool.</p>
                <p>- Thoải mái hoạt động với chất liệu co giãn đàn hồi cực tốt mà không cần sử dụng đến sợi spandex, bề mặt vải hồi phục tốt ngay sau khi co giãn.</p>
                <p>- Sợi cotton bột ngô chiếm tới 80% nên hiệu quả thấm hút cao.</p>
                <p>- Công nghệ kéo sợi Compact giúp xơ bông được sắp xếp chặt chẽ, giảm độ xù lông và mềm mại hơn.</p>
                <p>- Kiểu dáng rộng, nổi bật cá tính cùng hình in nổi bật núi lửa phía sau áo.</p>
            </div>
        `,
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
                <p>- Áo polo nữ bo kẻ hiện đại, mềm thoáng.</p>
                <p>- Công nghệ Siro compact với mật độ xơ cao, được xoắn gọn gàng và xe đôi nên bề mặt vải mịn màng.</p>
                <p>- Hạn chế xù lông hơn 17% và bền hơn 20% so với các loại vải khác cùng dòng.</p>
                <p>- Sản phẩm dễ chăm sóc, có thể giặt máy.</p>
            </div>
        `,
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
                <p>- Áo croptop nữ cá tính với chữ in nổi bật trước ngực, in puff tạo hiệu ứng nổi đặc biệt.</p>
                <p>- Thiết kế phần nách được cắt cách điệu, thoải mái.</p>
                <p>- Chất liệu thun rib co giãn tốt, giữ form khi mặc.</p>
                <p>- Có thể phối theo phong cách cá tính với quần suông, jogger, chân váy, quần jeans hay phong cách cơ bản cùng jeans, chân váy, quần short.</p>
                <p>- Thích hợp mặc đi chơi, đi làm hoặc đi học.</p>
            </div>
        `,
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
                <p>- Áo polo nữ bo kẻ hiện đại, mềm thoáng.</p>
                <p>- Công nghệ Siro compact với mật độ xơ cao, được xoắn gọn gàng và xe đôi nên bề mặt vải mịn màng.</p>
                <p>- Hạn chế xù lông hơn 17% và bền hơn 20% so với các loại vải khác cùng dòng.</p>
                <p>- Sản phẩm dễ chăm sóc, có thể giặt máy.</p>
            </div>
        `,
    },
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