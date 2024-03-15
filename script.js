function dataPerson(){

    var kirim = document.getElementById("form");
    var nama = kirim.nama.value;
    var pekerjaan = kirim.pekerjaan.value; 
    var hobby = kirim.hobby.value;
    var input = `<h2>Hasil Output</h2> <br>
                Nama : ${nama} <br>
                Pekerjaan : ${pekerjaan} <br>
                Hobby : ${hobby}`
    let no_input = 'Maaf nama wajib diisi';
    let hasil = (nama && pekerjaan && hobby !='') ? input : no_input;

    document.getElementById('hasil').innerHTML = hasil;
}


function dataCancel(){
        var hasilDiv = document.querySelector("div.hasil");
        if (hasilDiv){
          hasilDiv.remove();
        }
      
        document.getElementById("nama").value = "";
        document.getElementById("pekerjaan").value = "";
        document.getElementById("hobby").value = "";
      
        console.log("Data canceled.");
}
    
