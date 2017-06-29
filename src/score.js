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

  next(){
    return new Thirty();
  }
}

class Thirty {
  toString(){ 
    return '30'; 
  }
}

function love(){
  return new Love();
}

module.exports = {
  love
};
