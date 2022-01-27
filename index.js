function pendaftaran() {
  let obj = {
    nama = document.getElementById('name'),
    asal = document.getElementById('daerah')
  };
  let button = document.createElement("button");
  button.innerHTML = "mulai";
  
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  
  button.addEventListener ("click", function() {
    window.location.replace('test.html');
  });
  
}


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
    //img harus gambar yang di isi, answer jawaban nya berbentuk number.
    
    const index = Math.floor(Math.random() * quiz.length) // 0 - 15 agar keluar random.
    
    const questionObj = quiz[index] // quiz[0] => { question: 'gambar yang akan ditampilkan' }
    
    const questionElement = document.getElementById('question') // Ngambil gambar yang ada di html pake DOM
    
    questionElement.innerHTML = questionObj.question
    
    return questionObj
  }
  
  checkAnswerElement.addEventListener('click', function() {
    const answerElement = document.getElementById('answer')
    
    if(answerElement.value === question.answer) {
      answerResult
    }
    return count++
  })
  
  
  function hasilTest(count) {
    // function perhitungan skor
    if (count > 8) {
      return 'Anda tidak buta warna'
    } else if (count <=8 && count > 1) {
      return 'Anda buta warna parsial'
    } else {
      return 'anda buta warna total'
    }
  }
  
  function daerah(str) {
    //function menambahkan rumah sakit di hasil jika user buta warna parsial/total
    if (str === 'jakarta') {
      return 'untuk info lengkap silahkan pergi ke RS Mata JEC'
    } else if (str === 'bogor') {
      return 'untuk info lengkap silahkan pergi ke Bogor Eye Center'
    } else if (str === 'depok') {
      return 'untuk info lengkap silahkan pergi ke klinik Mata Depok'
    } else if (str === 'tangerang') {
      return 'untuk info lengkap silahkan pergi ke Poli Mata RS Sari Asih Sangiang'
    } else if (str === 'bekasi') {
      return 'untuk info lengkap silahkan pergi ke Klinik Utama Mata JEC Bekasi'
    } else {
      return 'hanya research daerah JABODETABEK'
    }
  }
  
  function hasilAkhir() {
    
  }
  
  
  let button = document.createElement("button");
  button.innerHTML = "next";
  
  let body = document.getElementsByTagName("body")[0];
  body.appendChild(button);
  
  button.addEventListener ("click", function() {
    testing()
  });