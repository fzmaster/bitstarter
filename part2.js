#!/usr/bin/env node
var fs = require('fs');
var outfile = "s2.txt";
function isPrime(n){ 
 if(n==0 || n==1) return false;

 for (var i = 2; i<=n/2; i++) {
  if(n%i == 0) return false;
 }
 return true;
}
var nrPrimos = 1;
var stringona =  '';
for(var v = 2; nrPrimos <= 100; v++)
{
 if(isPrime(v)) {
//  console.log(v);
  nrPrimos++;
stringona += ''+v;
  if(nrPrimos <= 100)
	  stringona += ',';
 }
}

fs.writeFileSync(outfile, stringona);  
console.log(stringona);
