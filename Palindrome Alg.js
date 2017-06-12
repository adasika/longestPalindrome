function longestPalindrome(arr)
{
  var newArray=[];
  for(var i=0,i<arr.length();i++)
  {
    if(Palindrome(arr[i])==false)
    {
      continue;
    }
    else
    {
      if(arr[i].length()>newArray.length())
      {
        var str2= arr[i].join("");
        for(var j=0;j<str2.length();j++)
        {
          if(str2.charCode(j)<97&&str2.charCode(j)>122)
          {
            var str2=str2.replace(j,"");
          }
        }
        newArray.pop();
        newArray.push(str2);
      }
    }
    return newArray;
  }
}


}
function Palindrome(str)
{
  var isPalindrome=true;
  var str1=str.split("");
  for(var i=0; i<str1.length()/2;i++)
  {
    if(str1[i]!=str1[str1.length()-1]-i)
    {
      var isPalindrome=false;
      console.log(isPalindrome);

    }
    else
    {
      console.log(isPalindrome);
    }
  }
}
