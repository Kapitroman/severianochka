const dataShops = [
  {
    container: "map1",
    objects: [
      {
        ordinates: [55.80870623, 37.49211736],
        hint: 'магазин "Восход"',
        balloon: 'ул. Дорожная 10',
        iconImageHref: 'img/svg/icon-shop-voshod.svg',
        iconImageSize: [93, 36],
        iconImageOffset: [-47, -36],
      },
      {
        ordinates: [55.81421613, 37.50104376],
        hint: 'магазин "Парус"',
        balloon: 'ул. Советская 87',
        iconImageHref: 'img/svg/icon-shop-parus.svg',
        iconImageSize: [88, 33],
        iconImageOffset: [-44, -33],
      },
      {
        ordinates: [55.80474248, 37.54241415],
        hint: 'магазин "Рябинушка"',
        balloon: 'ул. Заводская 16',
        iconImageHref: 'img/svg/icon-shop-rijbinushka.svg',
        iconImageSize: [119, 32],
        iconImageOffset: [-60, -32],
      },
      {
        ordinates: [55.79584675, 37.56112524],
        hint: 'магазин "Пелысь"',
        balloon: 'ул. Рабочая 1',
        iconImageHref: 'img/svg/icon-shop-pelys.svg',
        iconImageSize: [82, 32],
        iconImageOffset: [-41, -32],
      },
    ],
  },
  {
    container: "map2",
    objects: [
      {
        ordinates: [55.80870623, 37.49211736],
        hint: 'магазин "Восход"',
        balloon: 'ул. Дорожная 10',
        iconImageHref: 'img/svg/icon-shop-voshod.svg',
        iconImageSize: [93, 36],
        iconImageOffset: [-47, -36],
      },
      {
        ordinates: [55.81421613, 37.50104376],
        hint: 'магазин "Парус"',
        balloon: 'ул. Советская 87',
        iconImageHref: 'img/svg/icon-shop-parus.svg',
        iconImageSize: [88, 33],
        iconImageOffset: [-44, -33],
      },
      {
        ordinates: [55.80474248, 37.54241415],
        hint: 'магазин "Рябинушка"',
        balloon: 'ул. Заводская 16',
        iconImageHref: 'img/svg/icon-shop-rijbinushka.svg',
        iconImageSize: [119, 32],
        iconImageOffset: [-60, -32],
      },
      {
        ordinates: [55.79584675, 37.56112524],
        hint: 'магазин "Пелысь"',
        balloon: 'ул. Рабочая 1',
        iconImageHref: 'img/svg/icon-shop-pelys.svg',
        iconImageSize: [82, 32],
        iconImageOffset: [-41, -32],
      },
    ],
  },
  {
    container: "map3",
    objects: [
      {
        ordinates: [55.80870623, 37.49211736],
        hint: 'магазин "Восход"',
        balloon: 'ул. Дорожная 10',
        iconImageHref: 'img/svg/icon-shop-voshod.svg',
        iconImageSize: [93, 36],
        iconImageOffset: [-47, -36],
      },
      {
        ordinates: [55.81421613, 37.50104376],
        hint: 'магазин "Парус"',
        balloon: 'ул. Советская 87',
        iconImageHref: 'img/svg/icon-shop-parus.svg',
        iconImageSize: [88, 33],
        iconImageOffset: [-44, -33],
      },
      {
        ordinates: [55.80474248, 37.54241415],
        hint: 'магазин "Рябинушка"',
        balloon: 'ул. Заводская 16',
        iconImageHref: 'img/svg/icon-shop-rijbinushka.svg',
        iconImageSize: [119, 32],
        iconImageOffset: [-60, -32],
      },
      {
        ordinates: [55.79584675, 37.56112524],
        hint: 'магазин "Пелысь"',
        balloon: 'ул. Рабочая 1',
        iconImageHref: 'img/svg/icon-shop-pelys.svg',
        iconImageSize: [82, 32],
        iconImageOffset: [-41, -32],
      },
    ],
  },
  {
    container: "map4",
    objects: [
      {
        ordinates: [55.80870623, 37.49211736],
        hint: 'магазин "Восход"',
        balloon: 'ул. Дорожная 10',
        iconImageHref: 'img/svg/icon-shop-voshod.svg',
        iconImageSize: [93, 36],
        iconImageOffset: [-47, -36],
      },
      {
        ordinates: [55.81421613, 37.50104376],
        hint: 'магазин "Парус"',
        balloon: 'ул. Советская 87',
        iconImageHref: 'img/svg/icon-shop-parus.svg',
        iconImageSize: [88, 33],
        iconImageOffset: [-44, -33],
      },
      {
        ordinates: [55.80474248, 37.54241415],
        hint: 'магазин "Рябинушка"',
        balloon: 'ул. Заводская 16',
        iconImageHref: 'img/svg/icon-shop-rijbinushka.svg',
        iconImageSize: [119, 32],
        iconImageOffset: [-60, -32],
      },
      {
        ordinates: [55.79584675, 37.56112524],
        hint: 'магазин "Пелысь"',
        balloon: 'ул. Рабочая 1',
        iconImageHref: 'img/svg/icon-shop-pelys.svg',
        iconImageSize: [82, 32],
        iconImageOffset: [-41, -32],
      },
    ],
  }
];

const initShopsMapSection = (dataShopsItem) => {
  const map = document.querySelector(`#${dataShopsItem.container}`);
  if (!map) {
    return;
  }

  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(dataShopsItem.container, {
        center: [55.80503253, 37.51511999],
        zoom: 13,
        controls: [],
    });

    dataShopsItem.objects.forEach((item) => {
      let myPlacemark;

      myPlacemark = new ymaps.Placemark(item.ordinates, {
        hintContent: item.hint,
        balloonContent: item.balloon,
      },
      {
        iconLayout: 'default#image',
        iconImageHref: item.iconImageHref,
        iconImageSize: item.iconImageSize,
        iconImageOffset: item.iconImageOffset,
      });

      myMap.geoObjects.add(myPlacemark);
    })
  }
};

const initShopsMap = () => {
  dataShops.forEach((dataItem) => {
    initShopsMapSection(dataItem);
  })
}

export {initShopsMap};
