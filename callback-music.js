let listBand = ["ungu","wali"];

function rekaman(music){
    listBand.push(music);
}

function toko(music,callback){
    console.log('cari lagu '+music+' di toko');
    setTimeout(function(){
        let a = listBand.find(x=> x==music);
        if(a){
            callback(null,music);
        }else{
            console.log('data belum tersedia');
        }
    },2000);
    
}

function customer(music){
    console.log('pergi ke toko');
    toko(music, (err,data) => {
        if(err != null){
            console.log('Error');
            rekaman(music);
        }else{
            console.log('data tersedia');
        }
    })
}

//call function
customer("wali");