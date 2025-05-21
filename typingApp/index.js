/**
 * 問題
 */
class TypingApp {
    /**
     * 問題
     */
    questions;

    /**
     * 現在の問題番号
     */
    currentQuestionIndex;

    /**
     * 問題表示
     */
    questionEl;

    /**
     * 入力欄
     */
    inputEl;

    /**
     * 問題と入力の差分表示
     */
    feedbackEl;

    constructor() {
        this.questions = [
            "Hello World",
            "こんにちは",
            "Let's Typing!",
            "この問題で最後だよん"
        ]
        this.currentQuestionIndex = 0;
        this.questionEl = document.getElementById("question");
        this.inputEl = document.getElementById("input-area");
        this.feedbackEl = document.getElementById("feedback");
    }

    /**
     * 問題を表示する関数
     */
    showQuestion() {
        this.questionEl.textContent = this.questions[this.currentQuestionIndex];
        this.inputEl.value = "";
        this.feedbackEl.innerHTML = "";
        this.inputEl.focus();
    }

    /**
     * 入力値と問題の差分チェック
     */
    checkInput() {
        const userInput = this.inputEl.value;
        const question = this.questions[this.currentQuestionIndex];

        let resultHTML = "";
        let isCorrect = true;
        for (let i = 0; i < question.length; i++) {
            const inputChar = userInput[i] || "";
            const questionChar = question[i];

            if (inputChar === questionChar) {
                resultHTML += `<span class="correct">${inputChar}</span>`;
            } else {
                if (inputChar) {
                    resultHTML += `<span class="incorrect">${inputChar}</span>`;
                    isCorrect = false;
                } else {
                    resultHTML += "_";
                    isCorrect = false;
                }
            }
        }

        this.feedbackEl.innerHTML = resultHTML;

        if (isCorrect && userInput.length === question.length) {
            this.currentQuestionIndex++;
            if (this.currentQuestionIndex < this.questions.length) {
                setTimeout(() => this.showQuestion(), 500);
            } else {
                this.questionEl.textContent = "お疲れさまでした！";
                this.inputEl.disabled = true;
                this.feedbackEl.innerHTML = "";
            }
        }
    }
}

/**
 * タイピングアプリを定義
 */
const typingApp = new TypingApp();

/**
 * 入力するたびに問題との差分を検知
 */
typingApp.inputEl.addEventListener("input", typingApp.checkInput.bind(typingApp));

/**
 * 初期表示（問題１問目）
 */
typingApp.showQuestion();
