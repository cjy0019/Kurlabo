import React from 'react';
import RelatedProduct from './detail/RelatedProduct';
import PurchaseInfo from './detail/PurchaseInfo';

const ItemDetail = () => {
  const data = {
    no: '63711',
    img: 'https://img-cf.kurly.com/shop/data/goods/1611715742614y0.jpg',
    name: '[우주] 무산 재래김 25g(10매 내외)',
    short_description: '장흥에서 양식한 유기 김',
    price: '3,300',
    long_description: '',
    tags: {
      names: ['Kurly only'],
      types: [
        {
          type: 'default',
          names: ['Kurly only'],
        },
      ],
    },
    sales_status: 'ing',
    is_sales: true,
    is_shown: true,
    sales_unit: 1,
    unit_text: '1봉',
    weight: '25g 내외',
    origin: '',
    contactant: '',
    brand_title: '',
    effective_date_start: '',
    effective_date_end: '',
    expiration_date:
      '출고일 기준, 유통기한 만기 45일 이상 남은 상품을 보내드립니다. (총유통기한 : 90일)',
    not_sales_text: '',
    extended_infos: [],
    today_brix: '',
    guides: [],
    under_specific_quantity: 0,
    is_expected_point: true,
    expected_point: 0,
    expected_point_ratio: 0,
    is_kurly_pass_product: false,
    delivery_method: '',
    delivery_time_types: [0, 1],
    delivery_time_type_text: '샛별배송/택배배송',
    packing_type_text: '상온/종이포장',
    delivery_type: 0,
  };

  const relatedProducts = [
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
      name: '[씨투게더]땅콩버터 오징어',
      price: '9900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
      name: '[씨투게더]땅콩버터 오징어',
      price: '9900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
      name: '[씨투게더]땅콩버터 오징어',
      price: '9900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
      name: '[씨투게더]땅콩버터 오징어',
      price: '9900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1585642854156l0.jpg',
      name: '[씨투게더]땅콩버터 오징어',
      price: '9900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
      name: '[씨투게더]명태어포',
      price: '7900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
      name: '[씨투게더]명태어포',
      price: '7900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
      name: '[씨투게더]명태어포',
      price: '7900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
      name: '[씨투게더]명태어포',
      price: '7900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1575349219737l0.jpg',
      name: '[씨투게더]명태어포',
      price: '7900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
      name: '[바다원]구운 쥐포채 150g',
      price: '5900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
      name: '[바다원]구운 쥐포채 150g',
      price: '5900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
      name: '[바다원]구운 쥐포채 150g',
      price: '5900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
      name: '[바다원]구운 쥐포채 150g',
      price: '5900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1589172960257l0.jpg',
      name: '[바다원]구운 쥐포채 150g',
      price: '5900',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
      name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
      price: '11000',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
      name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
      price: '11000',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
      name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
      price: '11000',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
      name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
      price: '11000',
    },
    {
      img: 'https://img-cf.kurly.com/shop/data/goods/1592532897286l0.jpg',
      name: '[주전부리연구소]국산 내맘속에 핫다리 120g',
      price: '11000',
    },
  ];

  return (
    <div>
      <main className="w-1050 pt-8 mx-auto my-0 text-gray-800">
        <PurchaseInfo
          img={data.img}
          name={data.name}
          desc={data.short_description}
          price={+data.price.split(',').join('')}
          ea={data.unit_text}
          weight={data.weight}
          deliveryType={data.delivery_time_type_text}
          packingType={data.packing_type_text}
          expirationDate={data.expiration_date}
        />
        <RelatedProduct relatedProducts={relatedProducts} />
      </main>
    </div>
  );
};

export default ItemDetail;
