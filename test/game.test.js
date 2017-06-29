const Game = require('../src/game');

describe('game', () => {
  it('tracks players score from Love/Love to 15/Love to 15/15', () => {
    const game = new Game();


    game.firstPlayerScores();
    const output = game.secondPlayerScores();


    expect(output).to.deep.equal(['15','15']);
  });

  it('tracks game to 40/Love', () => {
    const game = new Game();

    expect(game.firstPlayerScores())
      .to.deep.equal(['15','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['30','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['40','Love']);
  });
});
