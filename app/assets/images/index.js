const routeImages = './backgroundImages/';

const historyBackground = require(routeImages + 'historyBackground.jpg');
const geographyBackground = require(routeImages + 'geographyBackground.jpg');
const computersBackground = require(routeImages + 'computersBackground.jpg');
const booksBackground = require(routeImages + 'booksBackground.jpg');
const scienceBackground = require(routeImages + 'scienceBackground.jpg');
const videoGamesBackground = require(routeImages + 'videoGamesBackground.jpg');
const mythologyBackground = require(routeImages + 'mythologyBackground.jpg');
const mathematicsBackground = require(routeImages + 'mathematicsBackground.jpg');
const musicBackground = require(routeImages + 'musicBackground.jpg');
const politicsBackground = require(routeImages + 'politicsBackground.jpg');
const generalKnowledgeBackground = require(routeImages + 'generalKnowledgeBackground.jpg');
const celebritiesBackground = require(routeImages + 'celebritiesBackground.jpg');

export const backgroundImages = {
    "History": historyBackground,
    "Geography": geographyBackground,
    "Computers": computersBackground,
    "Books": booksBackground,
    "Science & Nature": scienceBackground,
    "Video Games": videoGamesBackground,
    "Mythology": mythologyBackground,
    "Mathematics": mathematicsBackground,
    "Music": musicBackground,
    "Politics": politicsBackground,
    "General Knowledge": generalKnowledgeBackground,
    "Celebrities": celebritiesBackground,
};

export const defaultBackground = require(routeImages + 'entertainmentBackground.jpg');