fetch("products.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("products");

    data.forEach(product => {
      container.innerHTML += `
        <div class="card">
          <img src="${product.foto}" alt="${product.nama}">
          <h3>${product.nama}</h3>
          <p>⭐ ${product.rating}</p>
          <p><b>${product.harga}</b></p>

          <a href="${product.shopee}" target="_blank">
            <button>🛒 Shopee</button>
          </a>

          <a href="${product.tiktok}" target="_blank">
            <button>🎵 TikTok Shop</button>
          </a>
        </div>
      `;
    });
  });
