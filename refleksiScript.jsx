const questions = [
    {
      question: "Apakah dalam sehari Anda \nmenghabiskan satu bungkus \nrokok ?",
      correct: "A"
    },
    {
      question: "Apakah dalam sehari Anda \nmenghabiskan kurang dari \nsatu bungkus rokok ?",
      correct: "B"
    },
    {
      question: "Apakah saat ini Anda masih \nmerokok ?",
      correct: "A"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan daging kurang dari 3 kali?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan makanan berlemak tinggi dan makanan \nbersantan kurang dari 3 kali ?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan makanan gorengan \nkurang dari 3 kali?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan makanan cepat saji \nlebih dari 3 kali ?",
      correct: "A"
    },
    {
      question: "Apakah dalam seminggu Anda \nmengkonsumsi minuman \nberkafein (kopi) kurang dari \n3 kali ?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan makanan yang diasinkan \nseperti ikan asin dan cumi asin \nkurang dari 3 kali ?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan sayuran lebih dari 3 kali ?",
      correct: "B"
    },
    {
      question: "Apakah dalam seminggu Anda \nmakan buah-buahan \nlebih dari 3 kali ?",
      correct: "B"
    },
    {
      question: "Apakah setiap hari Anda rutin \nberolahraga ?",
      correct: "B"
    },
    {
      question: "Apakah dalam sehari Anda \nmelakukan kegiatan olahraga \nkurang dari 30 menit ?",
      correct: "B"
    },
    {
      question: "Apakah dalam sehari Anda \nmelakukan aktivitas fisik sehari\n-hari di dalam rumah \nkurang dari 30 menit ?",
      correct: "B"
    },
    {
      question: "Apakah dalam sehari Anda \nmelakukan aktivitas fisik sehari\n-hari diluar rumah \nkurang dari 30 menit ?",
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
      if (score >= 10) {
          grade = 'tinggi';
          gradeClass = 'poor-grade';  
      } else if (score <=9 && score >= 6) {
          grade = 'sedang';
          gradeClass = 'medium-grade';  
      } else {
          grade = 'baik';
          gradeClass = 'good-grade';  
      }
  
      
      quizText.style.display = "none";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";
      nextBtn.style.display = "none";
  
      
      const resultTitle = document.createElement("h2");
      resultTitle.textContent = "Hasil Refleksi";
      resultTitle.style.fontSize = "24px";
      resultTitle.style.fontWeight = "bold";
      resultTitle.style.textAlign = "center";
      resultTitle.style.marginBottom = "20px";
  
      
      resultBox.style.display = "block";
      resultBox.insertBefore(resultTitle, scoreResult); 
  
      scoreResult.textContent = `Skor Anda: ${score} dari ${questions.length}`;
      gradeResult.innerHTML = `Kategori: <span class="grade-text ${gradeClass}">${grade}</span>`;
  }
  
  
  
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
  
  
  showQuestion();
  
