//@import url("https://fonts.googleapis.com/css?family=Lato:400,700&display=swap");
/* fungsi dari kode diatas adalah mengimpor gaya font "Lato" dari Google Fonts dengan bobot 400 dan 700,
dan menetapkan tampilan yang optimal untuk meningkatkan kinerja tampilan teks di halaman web. */

function show_modal(iteration){
    /* Dapatkan modal */
    var modal = document.getElementById("myModal"+iteration);

    /* Dapatkan elemen <span> yang menutup modal */
    var span = document.getElementById("close"+iteration);

    /* Ketika pengguna mengklik tombol, buka modal */
    btn.onclick = function() {
    modal.style.display = "block";

    /* Ketika pengguna mengklik <span> (x), tutup modal */
    span.onclick = function() {
      modal.style.display = "none";
    }

    /* Ketika pengguna mengklik di luar modal, tutup modal */
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    }
}