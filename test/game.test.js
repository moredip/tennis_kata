const Game = require('../src/game');

describe('game', () => {
  it('tracks game to 40/30', () => {
    const game = new Game();

    expect(game.firstPlayerScores())
      .to.deep.equal(['15','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['30','Love']);

    expect(game.secondPlayerScores())
      .to.deep.equal(['30','15']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['40','15']);

    expect(game.secondPlayerScores())
      .to.deep.equal(['40','30']);
  });

  it('tracks game to player one win', () => {
    const game = new Game();

    expect(game.firstPlayerScores())
      .to.deep.equal(['15','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['30','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal(['40','Love']);

    expect(game.firstPlayerScores())
      .to.deep.equal('PLAYER ONE VICTORY');
  });

  it('tracks game to player two win', () => {
    const game = new Game();

    game.secondPlayerScores();
    game.secondPlayerScores();
    game.secondPlayerScores();
    expect(game.secondPlayerScores())
      .to.deep.equal('PLAYER TWO VICTORY');
  });
});
