//Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
//2, 98, 4, 96, 6, 62 ja niin edelleen. Tulosta luvut samalle riville. 


//Jos halutaan samalle riville?//
let l= "";
for (let k=1; k<100; k%=2=0) {
l+= k + ", "
}

console.log(l);