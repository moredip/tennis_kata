const Score = require('../src/score');

describe('Score', () => {
  describe('Love', () => {
    const love = Score.love();
    
    it('has a legit toString', () => {
      expect(love.toString()).to.equal('Love');
    });

    it('Love transitions to 15', () => {
      const next = love.next();
      expect(next.toString()).to.equal('15');
    });
  });
});
