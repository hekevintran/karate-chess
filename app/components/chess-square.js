import Ember from 'ember';

var ChessSquare = Ember.Component.extend({
    tagName: 'td',
    attributeBindings: ['width', 'height', 'style'],
    width: 100,
    height: 100,
    style: function () {
        return 'background-color: ' + this.get('color') + ';';
    }.property('color'),
    rowNumber: null,
    columnNumber: null,
    color: function () {
        var rowNumber = this.get('rowNumber');
        var columnNumber = this.get('columnNumber');
        var startingColor;
        var otherColor;
        if (rowNumber % 2 === 0) {
            startingColor = 'black';
            otherColor = 'white';
        } else {
            startingColor = 'white';
            otherColor = 'black';
        }

        if (columnNumber % 2 === 0) {
            return otherColor;
        } else {
            return startingColor;
        }
    }.property('rowNumber', 'columnNumber')
});

export default ChessSquare;
