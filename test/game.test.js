const Game = require('../src/game');

describe('game', () => {
  it('tracks players score from Love/Love to 15/Love', () => {
    const game = new Game();


    const output = game.firstPlayerScores();


    expect(output).to.deep.equal(['15','Love']);
  });

  xit('tracks players score from Love/Love to Love/15 to Love/30', () => {
    const game = new Game();


    game.firstPlayerScores();
    const output = game.firstPlayerScores();


    expect(output).to.deep.equal(['Love','30']);
  });
});
