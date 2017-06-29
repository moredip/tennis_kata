class Love {
  toString(){ 
    return 'Love'; 
  }

  next(){
    return new Fifteen();
  }
}

class Fifteen {
  toString(){ 
    return '15'; 
  }
}

function love(){
  return new Love();
}

module.exports = {
  love
};
