const Game = require('../src/game');

describe('game', () => {
  it('tracks players score from Love/Love to 15/Love', () => {
    const game = new Game();


    const output = game.firstPlayerScores();


    expect(output).to.deep.equal(['15','Love']);
  });

  it('tracks players score from Love/Love to 15/Love to 30/Love', () => {
    const game = new Game();


    game.firstPlayerScores();
    const output = game.firstPlayerScores();


    expect(output).to.deep.equal(['30','Love']);
  });

  it('tracks players score from Love/Love to 15/Love to 15/15', () => {
    const game = new Game();


    game.firstPlayerScores();
    const output = game.secondPlayerScores();


    expect(output).to.deep.equal(['15','15']);
  });
});
