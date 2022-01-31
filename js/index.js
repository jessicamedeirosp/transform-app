var app = new Vue({
    el: "#app",
    data: {
      text: "",
      count: 0,
      words: 0,
    },
    watch: {
      text(value) {
        this.count = value.length;
        if (value.length) this.words = value.split(" ").length;
        else this.words = 0;
      },
    },
    methods: {
      upperCase() {
        this.text = this.text.toUpperCase();
      },
      lowerCase() {
        this.text = this.text.toLowerCase();
      },
      capitalizeFirstLetter(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      },
      capitalizeFirstLetterOfPhrase() {
        this.text = this.capitalizeFirstLetter(this.text.toLowerCase());
      },
      capitalizeFirstLetterOfEachWord() {
        let newText = [];
        this.text
          .split(" ")
          .forEach((word) =>
            newText.push(this.capitalizeFirstLetter(word.toLowerCase()))
          );
        this.text = newText.join(" ");
      },
      interleaveUpperAndLowerCaseOfPhrase() {
        let newText = [];
        this.text.split(" ").forEach((word) => {
          newText.push(this.interleaveUpperAndLowerCase(word));
        });
        this.text = newText.join(" ");
      },
      interleaveUpperAndLowerCase(word) {
        let interleave = true;
        let newWord = "";
        for (i = 0; i < word.length; i++) {
          if (interleave) newWord += word[i].toUpperCase();
          else newWord += word[i].toLowerCase();
          interleave = !interleave;
        }
        return newWord;
      },
      removeSpaceOfPhrase() {
        this.text = this.text.replace(/\s/g, "");
      },
    },
  });