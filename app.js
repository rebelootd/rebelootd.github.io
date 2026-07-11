import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const daftarProduk = document.getElementById("produk");

async function loadProduk() {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    daftarProduk.innerHTML = "";

    if (snapshot.empty) {
      daftarProduk.innerHTML = "<h3>Belum ada produk.</h3>";
      return;
    }

    snapshot.forEach((doc) => {
      const p = doc.data();

      daftarProduk.innerHTML += `
        <div class="card">
          <img src="${p.image}" alt="${p.Name}" width="250">

          <h3>${p.Name}</h3>

          <p>⭐ ${p.rating}</p>

          <p>💰 Rp${p.price}</p>

          <a href="${p.Link}" target="_blank">
            <button>🛒 Shopee</button>
          </a>
        </div>
      `;
    });

  } catch (error) {
    console.error(error);
    daftarProduk.innerHTML = "<h3>❌ Gagal memuat produk.</h3>";
  }
}

loadProduk();
