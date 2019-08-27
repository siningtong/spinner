const arr=['\r|','\r/','\r-','\r\\','\r-','\r|','\r/','\r\\','\r-'];
for(let i=0;i<arr.length;i++){
  setTimeout(() => {
    process.stdout.write(arr[i]);
  }, (i+1)*100+i*100);
}