let obj = {
  nama: [],
  umur: [],
  alamat: [],
  kota: []
};

let listRS = [
	{nama : ['RS Jakarta1', 'RS Jakarta2', 'RS Jakarta3'], daerah : 'Jakarta'},
	{nama : ['RS Depok1', 'RS Depok2', 'RS Depok3'], daerah : 'Depok'},
  {nama : ['RS Tangerang1', 'RS Tangerang2', 'RS Tangerang3'], daerah : 'Tangerang'},
  {nama : ['RS Bogor1', 'RS Bogor2', 'RS Bogor3'], daerah : 'Bogor'},
  {nama : ['RS Bekasi1', 'RS Bekasi2', 'RS Bekasi3'], daerah : 'Bekasi'}
]

let count = 0
let jawaban = 0;
let butaAtauTidak = '';
let page1 = document.getElementById('page-1')
let page2 = document.getElementById('page-2')
let page3 = document.getElementById('page-3')

function isiData(){
  let tempNama = obj.nama[0]
  let tempUmur = obj.umur[0]
  let tempAlamat = obj.alamat[0]
  let tempLokasi = obj.kota[0]
  let html = ''

  if (jawaban <= 8) { 
    for (let i = 0; i < listRS.length; i++) {
      if (penamupungKota === listRS[i].daerah) {
        for (let j = 0; j < listRS[i].nama.length; j++) {
          // listRS[i].nama[j]
          html += '<li>' + listRS[i].nama[j] + '</li>'
        }
      }    
    }
    document.getElementById('userRS').innerHTML = html
  }

  count = 0
  jawaban = 0

  if (!tempNama) {
    tempNama = ''
    tempUmur = ''
    tempAlamat = ''
    tempLokasi = ''
    document.getElementById('userRS').innerHTML = 'tidak ada rekomendasi. Silahkan isi refresh'
  }
  
  document.getElementById('userNama').innerText = tempNama
  document.getElementById('userUmur').innerText = tempUmur
  document.getElementById('userAlamat').innerText = tempAlamat
  document.getElementById('userLokasi').innerText = tempLokasi
  document.getElementById('userHasil').innerText = butaAtauTidak
  // document.getElementById('rekom').innerText = rekomendasi
}

function pendaftaran() {
  
  // const body = document.getElementsByTagName("body")[0];
  // body.appendChild(button);
  
  penamupungNama = document.getElementById('inputName').value
  penamupungUmur = document.getElementById('inputAge').value
  penamupungAlamat = document.getElementById('inputAddress').value
  penamupungKota = document.getElementById('inputCity').value

  if (penamupungNama.trim() === '' || penamupungUmur.trim() === '' || penamupungAlamat.trim() === '' || penamupungKota.trim() === '' ) {
   alert('Data kurang lengkap')
   return
  }

  obj['nama'].push(penamupungNama)
  obj['umur'].push(penamupungUmur)
  obj['alamat'].push(penamupungAlamat)
  obj['kota'].push(penamupungKota)
  penamupungNama = '';
  
  console.log(obj);
  page1.classList.add('hilangkan')
  page2.classList.remove('hilangkan')
}

function testing() {
  const quiz = [
    {
      question: 'https://quiz123.xyz/storage/2020/01/9-tes-buta-warna-ishihara.png',
      answer: 45
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/2-tes-buta-warna-ishihara.png',
      answer: 8
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/1-tes-buta-warna-ishihara.png',
      answer: 12
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/13-tes-buta-warna-ishihara.png',
      answer: 73
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/11-tes-buta-warna-ishihara.png',
      answer: 7
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/7-tes-buta-warna-ishihara.png',
      answer: 74
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/17-tes-buta-warna-ishihara.png',
      answer: 42
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/5-tes-buta-warna-ishihara.png',
      answer: 3
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/10-tes-buta-warna-ishihara.png',
      answer: 5
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/12-tes-buta-warna-ishihara.png',
      answer: 16
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/4-tes-buta-warna-ishihara.png',
      answer: 5
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/16-tes-buta-warna-ishihara.png',
      answer: 26
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/6-tes-buta-warna-ishihara.png',
      answer: 15
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/8-tes-buta-warna-ishihara.png',
      answer: 6
    },
    {
      question: 'https://quiz123.xyz/storage/2020/01/3-tes-buta-warna-ishihara.png',
      answer: 29
    }
  ] //di isi sama gambar dan jawaban nya.

  //img harus gambar yang di isi, answer jawaban nya berbentuk number.
  let isi = document.getElementById('isian').value
  
  if (isi == quiz[count].answer) {
    console.log('berhasil masuk if');
    jawaban++
  }
  
  document.getElementById('isian').value = ''
  console.log(jawaban);
  count++;
  document.getElementById('gambar').src = quiz[count].question

  // let butaAtauTidak = '';
  console.log('jalan hasil');
 
  if (jawaban > 8) {
    butaAtauTidak = ' Anda tidak buta warna'
  } else if (jawaban <=8 && jawaban > 1) {
    butaAtauTidak = ' Anda buta warna parsial'
  } else {
    butaAtauTidak = ' Anda buta warna total'
  }

  if (count === quiz.length - 1) {
    page2.classList.add('hilangkan')
    page3.classList.remove('hilangkan')
    isiData()
  }
}

function hapus() {
  obj.nama.pop()
  obj.umur.pop()
  obj.alamat.pop()
  obj.kota.pop()
  butaAtauTidak = ''

  isiData();
}
