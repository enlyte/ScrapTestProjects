Vue.component('product-list', {
  template: '<div class="product-list">\
              <h2>{{thetitle}}</h2>\
              <ul>\
              <li v-for="product in products">\
                <img :src="product.image">\
                <p><strong>{{product.name}}</strong></p>\
                <p>{{product.description}}</p>\
              </li>\
              </ul>\
            </div>',
    props: ['thetitle', 'products']
});
