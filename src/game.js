const Score = require('./score');

module.exports = class Game {
  constructor(){
    this._firstPlayerScore = Score.love();
    this._secondPlayerScore = Score.love();
  }

  firstPlayerScores(){
    this._firstPlayerScore = this._firstPlayerScore.next();
    return this._representCurrentScore();
  }

  secondPlayerScores(){
    this._secondPlayerScore = this._secondPlayerScore.next();
    return this._representCurrentScore();
  }

  _representCurrentScore(){
    return [
      this._firstPlayerScore.toString(),
      this._secondPlayerScore.toString()
    ];
  }
};
