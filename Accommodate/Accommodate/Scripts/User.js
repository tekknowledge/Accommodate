var user = user || {};
(function ($, window, user) {
    var accommodations = null;

    user.AccommodationCategories = {
        EXTENDED_TIME: "Additional Time For Assignments",
        SIMPLIFIED_WORDING: "Reworded questions in simpler language",
        READ_TEXT_TO_STUDENT: "Read test and directions to student",
        OPEN_BOOK_TESTS: "Open-book or open-note tests",
        ACCEPT_SHORT_ANSWERS: "Accept short answers",
        BREAKS_BETWEEN_TASKS: "Breaks between tasks",
        HIGHLIGHTING_IMPORTANT_WORDS: "Highlighting important words or phrases in reading assignments",
        FOREIGN_LANGUAGE: "ESL"
    }

    
    user.AccommodationData = function () {
        this.readingLevel = null;
        this.accommodations = [];
    };

})($, window, user);
