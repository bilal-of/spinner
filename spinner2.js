arr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '] 
newTime = 100
for (let i = 0; i < 2; i++) {
  for (let element of arr) { 
    newTime += 200
    setTimeout(() => { 
      process.stdout.write(element);
    }, newTime)
  }
}

