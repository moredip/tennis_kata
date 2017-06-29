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

  next(){
    return new Forty();
  }
}

class Forty {
  toString(){ 
    return '40'; 
  }
}

function love(){
  return new Love();
}

module.exports = {
  love
};
