import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const daftarProduk = document.getElementById("produk");

async function loadProduk() {

  const snapshot = await getDocs(collection(db, "produk"));

  daftarProduk.innerHTML = "";

  snapshot.forEach((doc) => {

    const p = doc.data();

    daftarProduk.innerHTML += `
      <div class="card">

        <img src="${p.image}" width="250">

        <h3>${p.Name}</h3>

        <p>⭐ ${p.rating}</p>

        <p>💰 Rp${p.price}</p>

        <a href="${p.Link}" target="_blank">
          <button>🛒 Shopee</button>
        </a>

      </div>
    `;

  });

}

loadProduk();
