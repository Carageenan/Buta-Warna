function testing() {
    const quiz = [
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
      {
        question: '<img></img>',
        answer: 0
      },
    ] //di isi sama gambar dan jawaban nya.
      //img harus gambar yang di isi, answer jawaban nya berbentuk nomber.

  const index = Math.floor(Math.random() * quiz.length) // 0 - 15
  
  const questionObj = quiz[index] // quiz[0] => { question: 'gambar yang akan ditampilkan' }

  const questionElement = document.getElementById('question') // Ngambil paragraf yang ada di html pake DOM

  questionElement.innerHTML = questionObj.question

  return questionObj
}



function hasilTest(number) {
    // function perhitungan skor
    if (number > 8) {
        return 'Anda tidak buta warna'
    } else if (number <=8 && number > 1) {
        return 'Anda buta warna parsial'
    } else {
        return 'anda buta warna total'
    }
}

function daerah(str) {
    //function menambahkan rumah sakit di hasil
    if (str === 'jakarta') {
        return 'untuk info lengkap silahkan pergi ke RS Mata JEC'
    } else if (str === 'bogor') {
        return 'untuk info lengkap silahkan pergi ke Bogor Eye Center'
    } else if (str === 'depok') {
        return 'untuk info lengkap silahkan pergi ke klinik Mata Depok'
    } else if (str === 'tangerang') {
        return 'untuk info lengkap silahkan pergi ke Poli Mata RS. Sari Asih Sangiang'
    } else if (str === 'bekasi') {
        return 'untuk info lengkap silahkan pergi ke Klinik Utama Mata JEC Bekasi'
    }
}


//function tombol belum rapih dan belum ditempatkan dengan benar.
button.addEventListener ("click", function() {
    window.location.href = "test.html";
  });
    let button = document.createElement('button');
    button.innerHTML = "Mulai!"

button.addEventListener ("click", function() {
    window.location.href = "result.html";
    });
    let button = document.createElement('button');
    button.innerHTML = "Next"


button.addEventListener ("click", function() {
    window.location.href = "test.html";
    });
    let button = document.createElement('button');
    button.innerHTML = "coba lagi?"



button.addEventListener ("click", function() {
   window.location.href = "result.html";
      });
    let button = document.createElement('button');
    button.innerHTML = "selesai"
    
    
    