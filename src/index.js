module.exports = function check(str, bracketsConfig) {
    var arr = str.split('');
    var A = [];
    for ( var i =0; i<=arr.length;i++){
      if(arr[i]=='('||arr[i]=='['||arr[i]=='|'||arr[i]=='{'){
        A.push(arr[i]);
      }
    }
    for (var j = A.length; j<=arr.length; j++){
      if(arr[j]==')'||arr[j]==']'||arr[j]=='|'||arr[j]=='}'){
        A.pop(A.length-1);
      }
    }
    if(A.length==0) return true;
    else return false;
  }
  
