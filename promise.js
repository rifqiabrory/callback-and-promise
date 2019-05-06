let listBand = ["ungu","wali"];

function rekaman(music){
    listBand.push(music);
    customer(music);    
}

function toko(music){
    console.log('cari lagu '+music+' di toko');
    
    return new Promise( function(resolve,reject) {
        setTimeout( function (){
            let a = listBand.find(x => x==music);
            if(a){
                resolve('data tersedia dengan lagu '+music);
            }else{
                reject('data belum tersedia');
            }
        },1000);
    });
}

function customer(music){
    console.log('pergi ke toko');
    toko(music).then((resolve) => {
        console.log(resolve);
    }).catch((err) => {
        console.log(err);
    })
}

//call function
customer('udin');