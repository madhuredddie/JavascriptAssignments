function sortArray(ar) {
      
    let i = 0;
    let j=0; 
      
    while (i < ar.length) { 
        j = i + 1; 
        while (j < ar.length) {
              
            if (ar[j] < ar[i]) {
                let temp = ar[i]; 
                ar[i] = ar[j]; 
                ar[j] = temp; 
            } 
            j++; 
        } 
        i++; 
    } 
} 

let array=[45,65,13,25,73,89]
console.log("Array before sorting" +array)
sortArray(array)
console.log("Array after sorting "+array);
 array=[32,17,18,26,43,59,4]
 console.log("Array before sorting" +array)
 sortArray(array)
 console.log("Array after sorting "+array);