const Game = require('../src/game');

describe('game', () => {
  it('tracks players score from Love/Love to Love/15', () => {
    const game = new Game();
    const output = game.firstPlayerScores();
    expect(output).to.deep.equal(['Love','15']);
  });
});
