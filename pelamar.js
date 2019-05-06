class pelamar {
    constructor(nama, pengalaman, lulusan) {
        this.nama = nama,
            this.pengalaman = pengalaman,
            this.lulusan = lulusan
    }
}

class requirement {
    constructor(lulusan, pengalaman) {
        this.lulusan = lulusan
        this.pengalaman = pengalaman
    }
}

class psikotest {
    constructor(nama, nilai) {
        this.nama = nama
        this.nilai = nilai
    }
}

var review;
melamar('Rifqi', 'S1', 'SMA')
async function melamar(nama, pengalaman, lulusan) {
    let datadiri = new pelamar(nama, pengalaman, lulusan)
    console.log('mengirim lamaran')
    let interview;
    let intresult;
    let Psiko = await HR(datadiri, 'melamar').catch(ditolak)

    if (Psiko) {
        let result;
        psikot(datadiri, (resulted) => {
            result = resulted
        })
        interview = await HR(result, 'psikotest').catch(tolakint)
        if (interview) {
            console.log('masuk interview')
            user(datadiri, 'applicant')
            intresult = await HR(datadiri, 'notify').catch(console.log)
            if (intresult) {
                console.log('selamat anda diterima di perusahaan')
                setTimeout(() => {
                    console.log('mulai bekerja')
                }, 2000);
            }
        }

    }
}
function tolakint() {
    console.log(`mohon maaf pelamar anda gagal di psikotest`)
}
async function HR(data, status) {
    let require = new requirement('S1', '1 tahun');
    if (status == 'melamar') {
        console.log(`lamaran diterima oleh HR`);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.lulusan == require.lulusan && data.pengalaman == require.pengalaman) {
                    console.log('di undang ke psikotes')
                    resolve(true)
                } else {
                    reject(data.nama)
                }
            }, 1000);
        })

    } else if (status == 'psikotest') {
        let us = await user(data, 'HR').catch(false)
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (us) {
                    console.log('lulus dari psikotes')
                    resolve(true)
                } else {
                    reject(false)
                }
            }, 1000);
        })
    } else if (status == 'notify') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (review) {
                    console.log('notif lulus dari interview')
                    resolve(true)
                } else {
                    reject('mohon maaf anda kurang memenuhi kriteria setelah interview')
                }
            }, 2000);
        })
    }
}

function diterima(data) {
    console.log(`selamat pelamar atas nama : ${data} bisa mengikuti psikotes`)
    psiko = true;
}

function ditolak(data) {
    console.log(`mohon maaf pelamar atas nama ${data} belum memenuhi kriteria perusahaan kami`)
}

function user(data, source) {
    if (source == 'HR') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data.nilai >= 7) {
                    resolve(true)
                } else {
                    reject(data.nama)
                }
            }, 2000);
        })
    } else if (source == 'applicant') {
        let nilai = 8
        if (nilai < 7) {
            review = false;
        } else {
            review = true;
        }
    }
}

function psikot(data, callback) {
    console.log('pergi psikotes');
    let nilai = 7;
    let result = new psikotest(data.nama, nilai);
    callback(result);
}