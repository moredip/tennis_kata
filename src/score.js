function createScore(repr,next){
  return {
    toString(){ return repr; },
    next
  }
}

const LOVE = createScore('Love',()=> FIFTEEN);
const FIFTEEN = createScore('15',()=> THIRTY);
const THIRTY = createScore('30',()=> FORTY);
const FORTY = createScore('40');

function love(){
  return LOVE;
}

module.exports = {
  love
};
