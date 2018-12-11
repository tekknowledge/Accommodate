var user = user || {};
(function ($, window, user) {
    user.Repository = {};

    user.Repository.getAccommodations = function (userId) {
        var accommodationData = new user.AccommodationData();
        accommodationData.readingLevel = 4;
        accommodationData.accommodations.push(user.AccommodationCategories.EXTENDED_TIME);
        accommodationData.accommodations.push(user.AccommodationCategories.HIGHLIGHTING_IMPORTANT_WORDS);
        accommodationData.accommodations.push(user.AccommodationCategories.FOREIGN_LANGUAGE);
        accommodationData.accommodations.push(user.AccommodationCategories.READ_TEXT_TO_STUDENT);
        accommodationData.accommodations.push(user.AccommodationCategories.SIMPLIFIED_WORDING);

        return accommodationData;
    }
})($, window, user);
