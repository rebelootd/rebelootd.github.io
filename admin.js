import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const btn = document.getElementById("simpan");

btn.addEventListener("click", async () => {
  try {

    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;
    const rating = document.getElementById("rating").value;
    const link = document.getElementById("link").value;

    const file = document.getElementById("fileGambar").files[0];

    if (!file) {
      alert("Pilih gambar dulu ya 😊");
      return;
    }

    // Upload ke Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rebelootd_upload");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/lbjs42j0/image/upload",
      {
        method: "POST",
        body: formData
      }
    );

    const hasil = await response.json();

    if (!hasil.secure_url) {
      console.log(hasil);
      alert("Upload gambar gagal.");
      return;
    }

    // Tampilkan link gambar otomatis
    document.getElementById("gambar").value = hasil.secure_url;

    // Simpan ke Firestore
    await addDoc(collection(db, "products"), {
      Name: nama,
      price: Number(harga),
      rating: Number(rating),
      image: hasil.secure_url,
      Link: link
    });

    alert("🎉 Produk berhasil ditambahkan!");

    // Kosongkan form
    document.getElementById("nama").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("gambar").value = "";
    document.getElementById("link").value = "";
    document.getElementById("fileGambar").value = "";

  } catch (err) {
    console.error(err);
    alert("Terjadi kesalahan.");
  }
});
