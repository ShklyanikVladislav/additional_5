module.exports = function check(str, bracketsConfig) {
    var arr = str.split('');
    var A = []; 
    st:
    for ( var i =0; i<arr.length;i++) {
      if(arr[i]=='('||arr[i]=='['||arr[i]=='{'){
        A.push(arr[i]);
//continue st;
      }
  
  
      //if(A.length==0&&arr.length!=(i+1)&&(arr[i]==')'||arr[i]==']'||arr[i]=='}')) return false;
    if(arr[i]==')'&&A[A.length-1]=='(') A.pop(A.length-1); 

    if(arr[i]=='}'&&A[A.length-1]=='{') A.pop(A.length-1);

    if(arr[i]==']'&&A[A.length-1]=='[') A.pop(A.length-1);

    if(arr[i]=='|'&&A[A.length-1]=='|') A.pop(A.length-1);

    //if(arr[i]==arr[i-1]&&arr[i]=='|') A.pop(A.length-1);
  }
  
       
    if(A.length==0) return true;
    else return false;
  }


//|(|)