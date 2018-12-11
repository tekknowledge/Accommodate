

var wordFactory = wordFactory || {};
(function ($, window, wordFactory) {
    wordFactory.Data = function () {
        this.word = null;
        this.gradeLevel = null;
    }

    wordFactory.Load = function () {
        var array = [];

        var word = new wordFactory.Data();
        word.word = "garish";
        word.gradeLevel = 10;

        array.push(word);

        word = new wordFactory.Data();
        word.word = "thou";
        word.gradeLevel = 4;

        array.push(word);

        return array;
    }

    wordFactory.GetWordsAtOrAboveGradeLevel = function (gradeLevel) {
        var words = wordFactory.Load();
        var returnWords = [];

        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            if (word.gradeLevel >= gradeLevel)
                returnWords.push(word);
        }

        return returnWords;
    }
})($, window, wordFactory);
