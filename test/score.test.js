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

  describe('15', () => {
    const fifteen = Score.love().next();

    it('transitions to 30', () => {
      const next = fifteen.next();
      expect(next.toString()).to.equal('30');
    });
  });
});
