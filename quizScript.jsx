const questions = [
    {
      question: "Stroke dapat diakibatkan oleh tekanan darah Tinggi?",
      correct: "A"
    },
    {
      question: "⁠Stroke dapat menyebabkan wajah \n tidak simetris ?",
      correct: "A"
    },
    {
      question: "⁠Seseorang akan lebih berisiko terkena penyakit stroke jika memiliki \nriwayat penyakit jantung ? ",
      correct: "A"
    },
    {
      question: "⁠Gejala stroke dapat terjadi \ndalam waktu yang bersamaan ?",
      correct: "A"
    },
    {
      question: "Stroke dapat mengakibatkan \nseseorang kesulitan dalam \nmengunyah makanan ?",
      correct: "A"
    },
    {
      question: "⁠⁠Pandangan kabur mendadak \nbukan merupakan gejala stroke ?",
      correct: "B"
    },
    {
      question: "Mendadak hilang kontrol pada \nkandung kemih merupakan \ngejala stroke ?",
      correct: "A"
    },
    {
      question: "⁠Susah memahami instruksi bukan \nmerupakan tanda dari stroke ?",
      correct: "B"
    },
    {
      question: "Stroke dapat mengakibatkan \nhilangnya ingatan seseorang ?",
      correct: "A"
    },
    {
      question: "⁠Apakah penyakit stroke dapat \nmenyebabkan kematian ?",
      correct: "A"
    },
    {
      question: "⁠Apakah dengan mengetahui tanda \ndan gejala penyakit stroke dapat \nmeningkatkan kesadaran dan \nkewaspadaan diri?",
      correct: "A"
    },
    {
      question: "Apakah dengan mengenali tanda \ndan gejala stroke dapat mencegah \nterjadinya stroke ?",
      correct: "A"
    },
    {
      question: "Apakah dengan pola \nhidup sehat dapat membuat anda \nterhindar dari penyakit stroke ?",
      correct: "A"
    },
    {
      question: "Apakah gejala stroke sangat \nmudah diobati ?",
      correct: "B"
    },
    {
      question: "Apakah stroke dapat \nmengganggu kesehatan mental ?",
      correct: "A"
    },
    {
      question: "Stroke tidak dapat di sebabkan \noleh diabetes ?",
      correct: "B"
    },
    {
      question: "Merokok dan mengonsumsi \nalkohol tidak dapat \nmenyebabkan penyakit stroke ?",
      correct: "B"
    },
    {
      question: "⁠Stroke tidak dapat menimbulkan \nmasalah psikologis \nseperti depresi ?",
      correct: "B"
    },
    {
      question: "Stroke tidak mampu memengaruhi \nkemampuan berbicara dan \nberbahasa seseorang ?",
      correct: "B"
    },
    {
      question: "⁠Apakah remaja tidak mungkin \nterkena penyakit stroke ?",
      correct: "B"
    }
  ];
  
  let currentQuestionIndex = 0;
  const userAnswers = [];
  
  const quizContainer = document.querySelector(".quiz-container");
  const quizText = document.querySelector(".quiz-text");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById('backBtn');
  const resultBox = document.createElement("div");
  resultBox.id = "resultBox";
  resultBox.classList.add("result-box");
  quizContainer.appendChild(resultBox);
  
  const scoreResult = document.createElement("p");
  const gradeResult = document.createElement("p");
  resultBox.appendChild(scoreResult);
  resultBox.appendChild(gradeResult);
  
  function showQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      quizText.textContent = currentQuestion.question;
  }
  
  function disableButtons() {
      yesBtn.disabled = true;
      noBtn.disabled = true;
  }
  
  function enableButtons() {
      yesBtn.disabled = false;
      noBtn.disabled = false;
  }
  
  function handleAnswer(answer) {
      userAnswers[currentQuestionIndex] = answer;
      disableButtons();
      nextBtn.style.display = "inline-block";
  }
  
  function showResult() {
    let score = 0;

    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === (questions[i].correct === "A" ? "Ya" : "Tidak")) {
            score++;
        }
    }

    let grade = '';
    let gradeClass = '';
    let imageSrc = '';

    if (score >= 15) {
        grade = 'Baik';
        gradeClass = 'good-grade';
        imageSrc = 'gambar-baik.png'; 
    } else if (score <= 14 && score >= 10) {
        grade = 'Cukup';
        gradeClass = 'medium-grade';
        imageSrc = 'gambar-buruk.png';
    } else {
        grade = 'Kurang';
        gradeClass = 'poor-grade';
        imageSrc = 'gambar-sedang.png';
    }

    // Sembunyikan elemen quiz
    quizText.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    nextBtn.style.display = "none";

    // Judul hasil
    const resultTitle = document.createElement("h2");
    resultTitle.textContent = "Hasil Quiz";
    resultTitle.style.fontSize = "24px";
    resultTitle.style.fontWeight = "bold";
    resultTitle.style.textAlign = "center";
    resultTitle.style.marginBottom = "20px";

    // Tambahkan gambar hasil
    const resultImage = document.createElement("img");
    resultImage.src = imageSrc;
    resultImage.alt = grade;
    resultImage.style.maxWidth = "200px";
    resultImage.style.display = "block";
    resultImage.style.margin = "20px auto";

    // Tampilkan hasil
    resultBox.style.display = "block";
    resultBox.innerHTML = ""; 
    resultBox.appendChild(resultTitle);
    resultBox.appendChild(scoreResult);
    resultBox.appendChild(gradeResult);
    resultBox.appendChild(resultImage);

    scoreResult.textContent = `Skor Anda: ${score} dari ${questions.length}`;
    gradeResult.innerHTML = `Nilai Anda: <span class="grade-text ${gradeClass}">${grade}</span>`;
}

  
  
  // Event listener
  yesBtn.addEventListener("click", () => handleAnswer("Ya"));
  noBtn.addEventListener("click", () => handleAnswer("Tidak"));
  nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          showQuestion();
          enableButtons();
          nextBtn.style.display = "none";
      } else {
          showResult();
      }
  });
  
  // Menampilkan pertanyaan pertama
  showQuestion();
  
