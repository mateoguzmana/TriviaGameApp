export default class QuizActions {
    /**
     * Callback that returns data response.
     *
     * @callback callback
     * @param {string} response
     */

    /**
     * Get API data.
     * @param {callback} callback - The callback that handles the response.
     */
    static getData(callback) {
        let apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

        fetch(apiUrl)
            .then((data) => {
                let response = JSON.parse(data["_bodyText"])["results"];
                callback(response);
            })
    }

    /**
     * Get question category.
     * @param {string} category - Raw question category.
     * @returns {string} Category formatted.
     */
    static getCategory(category) {

        let searchByColon = () => {
            return category.split(": ")[1];
        };

        let categoryFormatted = category.search(":") === -1 ? category : searchByColon();

        return categoryFormatted;
    }

    /**
     * Replace question special characters.
     * @param {string} question - Raw question.
     * @returns {string} Question formatted.
     */
    static formatQuestion(question) {
        return question
            .replace(/&amp;/g, "&")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
    }
}