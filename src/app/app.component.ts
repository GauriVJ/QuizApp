import { Component, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QuizApp';
  score = 0;
  showscore= false; //state of answer
  isstart = false;
  selectedAnswers: string[] = [];
  Againscore = true;
  AttemptAgain = true;
  iterate = false;
  //dispscore = false;

  // constructor(private cdr: ChangeDetectorRef) {
  //   // Your other constructor code here
  // }
  // [what was this??]

  questions: any[] = [
    {
      questionText: 'What does HTTP stands for?',
      answers: ['Hypertext Transfer Protocol', 'Hyper Transfer Text Protocol', 'High Transfer Text Protocol', 'None of the above'],
      correctAnswer: 'Hypertext Transfer Protocol'

    },
    {
      questionText: 'CSS stands for',
      answers: ['Cascading Style Sheets', 'CAsting style sheets', 'Casting and Scripting Sheets', 'Nonw of the above'],
      correctAnswer: 'Cascading Style Sheets'
    },
    {
      questionText: 'CSS stands for',
      answers: ['Cascading Style Sheets', 'CAsting style sheets', 'Casting and Scripting Sheets', 'Nonw of the above'],
      correctAnswer: 'Cascading Style Sheets'
    }

    //yet to add questions
  ];

  Start() {
    this.isstart = true;
    this.iterate = true;
  }

  check(question: any, selectedAnswer: string) {
    console.log('selectedAnswer', selectedAnswer)
    console.log('question', question)
    if (selectedAnswer === question.correctAnswer) {
      this.score = this.score + 1;
    }
  }

  submitAnswers() {
   
    this.showscore = true;
    this.Againscore = false;
    this.AttemptAgain = false;

  }


}


