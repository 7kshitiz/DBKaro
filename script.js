$(document).ready(async () => {
    try {
      // Fetch data from FakeStoreAPI using the Fetch API
      const response = await fetch('https://fakestoreapi.com/products/');

      // Check if the request was successful (status code 200)
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      // Parse the response as JSON
      const products = await response.json();

      // Render products in the productContainer
      const productContainer = $('.productContainer');

      products.forEach(product => {
      /*  let limit = 10;
        let des = $(product).prop('description');
        var words = des.split(' ');
        var trucn_des = words.slice(0,limit).join(' ');
        des = trucn_des + "...";*/
        productContainer.append(`
          <div class="pd-div min-w-24 hover:shadow-2xl shadow-blue-500/300">
            <div class="card">
              <div class ="columns con-img-d flex justify-center">
              <img src="${product.image}" class="w-2/3 aspect-square card-img-top con-img hover:drop-shadow-2xl" alt="${product.title}"/>
              </div>
              <div class="columns card-body">
                <h5 class="truncate card-title font-bold">${product.title}</h5>
                <p class="truncate card-text">${product.description}</p>
                <p class="truncate card-text  font-bold">Price:${product.price}$</p>
                <button type="button" class="btn btn-primary hover:">Add</button>
              </div>
            </div>
          </div>
        `);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

