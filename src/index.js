module.exports = function check(str, bracketsConfig) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count12 = 0;
  let count34 = 0;
  let count56 = 0;
  let count77 = 0;
  let count88 = 0;
  for(let i = 0;i<str.length;i++){
    if(str[i] == "["){
      count2++;
    }
    else if(str[i] == "]"){
      count2--;
      if (count2<0){
        return false;
      }
    }
    if(str[i] == "{"){
      count3++;
    }
    else if(str[i] == "}"){
      count3--;
      if (count3<0){
        return false;
      }
    }
    if(str[i] == "|"){
      count4++;
    }
    if(str[i] == "("){
      count1++;
    if (count2==1 || count3==1 /*|| count4 % 2 != 0*/){
        return false;
      }
    }
    else if(str[i] == ")"){
      count1--;
      if (count1<0){
        return false;
      }
    }
    if(str[i] == "1"){
      count12++;
    }
    else if(str[i] == "2"){
      count12--;
      if (count12<0){
        return false;
      }
    }
  if(str[i] == "3"){
    count34++;
  }
  else if(str[i] == "4"){
    count34--;
    if (count34<0){
      return false;
    }
  }
  if(str[i] == "5"){
    count56++;
  }
  else if(str[i] == "6"){
    count56--;
    if (count56<0){
      return false;
    }
  }
  if(str[i] == "7"){
    count77++;
  }
  if(str[i] == "8"){
    count88++;
  }
}
  if (count1 == 0 && count2 == 0 && count3 == 0 && count4 % 2 == 0 && count12 == 0 &&
    count34 == 0 && count56 == 0  && count77 % 2 == 0 && count88 % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}
