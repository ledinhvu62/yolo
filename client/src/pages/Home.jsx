import React from 'react'

import Helmet from '../components/Helmet'
import Slider from '../components/Slider'
import Section, { SectionTitle, SectionBody } from '../components/Section'
import Policy from '../components/Policy'
import Grid from '../components/Grid'
import ProductCard from '../components/ProductCard'

import slider from '../assets/fake-data/slider'
import policy from '../assets/fake-data/policy'

import { useSelector } from 'react-redux'

const Home = () => {
    const products = useSelector((state) => state.productList.value)

    return (
        <Helmet title='Trang chủ'>
            {/* slider */}
            <Slider
                data={slider}
                auto={true}
                timeOut={5000}
            />
            {/* end slider */}

            {/* policy */}
            <Policy data={policy} />
            {/* end policy */}

            {/* best selling section */}
            <Section>
                <SectionTitle>
                    Sản phẩm bán chạy
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {
                            products.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.images[0]}
                                    img02={item.images[1]}
                                    name={item.name}
                                    price={+item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling section */}

            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {
                            products.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.name}
                                    price={+item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end new arrival section */}

            {/* recommended product section */}
            <Section>
                <SectionTitle>
                    Gợi ý cho bạn
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={5}
                        mdCol={3}
                        smCol={2}
                        gap={20}
                    >
                        {
                            products.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.name}
                                    price={+item.price}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end recommended product section */}
        </Helmet>
    )
}

export default Home