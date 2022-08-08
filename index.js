let answers = []

answers.push("It is certain.");
answers.push("It is decidedly so.");
answers.push("Without a doubt.");
answers.push("Yes definitely.");
answers.push("You may rely on it.");
answers.push("As I see it, yes.");
answers.push("Most likely.");
answers.push("Outlook good.");
answers.push("Yes.");
answers.push("Signs point to yes.");
answers.push("Reply hazy, try again.");
answers.push("Ask again later.");
answers.push("Better not tell you now.");
answers.push("Cannot predict now.");
answers.push("Concentrate and ask again.");
answers.push("Don't count on it.");
answers.push("My reply is no.");
answers.push("My sources say no.");
answers.push("Outlook not so good.");
answers.push("Very doubtful.");


    let enterButton = document.querySelector(".enter");
    enterButton.addEventListener("click", function() {

      if (document.getElementById("question").value.length == 0) {
        alert("Question must be filled!");
        return false;

      } else if (document.getElementById('question').value.indexOf("?") != -1) {
        let i = Math.floor(Math.random() * answers.length);
        let tag = document.createElement("h2");
        let text = document.createTextNode(answers[i]);
        tag.appendChild(text);
        document.querySelector("body").appendChild(tag);
    
        let instruction = document.querySelector(".instruction");
        instruction.classList.add("hidden");
        let question = document.querySelector("input");
        question.classList.add("hidden");
        enterButton.classList.add("hidden");

      } else {
        alert("Question must contain a question mark");
      }
      
      let refreshButton = document.querySelector(".refresh");
      refreshButton.classList.add("show");
      document.querySelector(".refresh").addEventListener("click", function () {
        location.reload();
      
      })
      
    });
     


//DONE :
            // remplacer alert par un message dans la page
            // effacer toute la page, uniquement laisser la question, la réponse                
            // css (radial blue background)
            // obligé d'écrire quelque chose
            // obligé de mettre une question avec un point d'interrogation
            // bouton retour pour recommencer
