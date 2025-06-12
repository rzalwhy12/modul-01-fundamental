// Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours

// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept



interface CatatanKerjaHarian {
    jamMasuk: string;
    jamPulang: string;
    jamKerjaHarian: number;
    duitHarian: number;
}

class PegawaiTeladan {
    namaPegawai: string;

    constructor(namaPegawai: string) {
        this.namaPegawai = namaPegawai;
    }

    protected _hitungDurasiKerja(jamMasuk: string, jamPulang: string): number {
        const parseWaktu = (stringWaktu: string): Date => {
            const [jam, menit] = stringWaktu.split(':').map(Number);
            const tanggalNgawur = new Date('2025-01-01T00:00:00'); 
            tanggalNgawur.setHours(jam, menit, 0, 0);
            return tanggalNgawur;
        };

        const waktuMasuk = parseWaktu(jamMasuk);
        let waktuPulang = parseWaktu(jamPulang);

        // Jika jam pulang lebih kecil dari jam masuk, asumsikan itu di hari berikutnya
        if (waktuPulang.getTime() < waktuMasuk.getTime()) {
            waktuPulang.setDate(waktuPulang.getDate() + 1);
        }

        const durasiMs = waktuPulang.getTime() - waktuMasuk.getTime();
        return parseFloat((durasiMs / (1000 * 60 * 60)).toFixed(2));
    }
}

class SiPalingGacor extends PegawaiTeladan {
    daftarHariKerja: CatatanKerjaHarian[] = [];
    #duitPerJam_Normal: number = 100000;
    #duitLembur_Spesial: number = 75000;
    private readonly BATAS_JAM_NORMAL: number = 6;

    constructor(namaPegawai: string) {
        super(namaPegawai);
    }

    catatJamGacorku(jamMasuk: string, jamPulang: string): void {
        const totalJamKerja = this._hitungDurasiKerja(jamMasuk, jamPulang);

        let uangDidapat: number = 0;
        let jamReguler: number = 0;
        let jamLembur: number = 0;

        // Logika perhitungan gaji pokok dan lembur
        if (totalJamKerja > this.BATAS_JAM_NORMAL) {
            jamReguler = this.BATAS_JAM_NORMAL;
            jamLembur = totalJamKerja - this.BATAS_JAM_NORMAL;
            uangDidapat = (this.#duitPerJam_Normal * jamReguler) + (this.#duitLembur_Spesial * jamLembur);
        } else {
            jamReguler = totalJamKerja;
            uangDidapat = this.#duitPerJam_Normal * jamReguler;
        }

        const catatanBaru: CatatanKerjaHarian = {
            jamMasuk,
            jamPulang,
            jamKerjaHarian: totalJamKerja,
            duitHarian: uangDidapat
        };

        this.daftarHariKerja.push(catatanBaru);
    }

    totalDuitKaryawan(): string {
        let totalSeluruhDuit = 0;

        if (this.daftarHariKerja.length > 0) {
            for (const hari of this.daftarHariKerja) {
                totalSeluruhDuit += hari.duitHarian;
            }
        }

        // Format total gaji ke mata uang IDR
        return totalSeluruhDuit.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    }
}

class SiPalingSantai extends PegawaiTeladan {
    daftarHariKerja: CatatanKerjaHarian[] = [];
    #duitPerJam_Normal: number = 50000;
    #duitLembur_Spesial: number = 30000;
    private readonly BATAS_JAM_NORMAL: number = 6;

    constructor(namaPegawai: string) {
        super(namaPegawai);
    }

    catatJamGacorku(jamMasuk: string, jamPulang: string): void {
        const totalJamKerja = this._hitungDurasiKerja(jamMasuk, jamPulang);

        let uangDidapat: number = 0;
        let jamReguler: number = 0; // Inisialisasi karena digunakan di perhitungan
        let jamLembur: number = 0;  // Inisialisasi karena digunakan di perhitungan

        if (totalJamKerja > this.BATAS_JAM_NORMAL) {
            jamReguler = this.BATAS_JAM_NORMAL;
            jamLembur = totalJamKerja - this.BATAS_JAM_NORMAL;
            uangDidapat = (this.#duitPerJam_Normal * jamReguler) + (this.#duitLembur_Spesial * jamLembur);
        } else {
            uangDidapat = this.#duitPerJam_Normal * totalJamKerja;
        }

        const catatanBaru: CatatanKerjaHarian = {
            jamMasuk,
            jamPulang,
            jamKerjaHarian: totalJamKerja,
            duitHarian: uangDidapat
        };

        this.daftarHariKerja.push(catatanBaru);
    }

    totalDuitKaryawan(): string {
        let totalSeluruhDuit = 0;

        if (this.daftarHariKerja.length > 0) {
            for (const hari of this.daftarHariKerja) {
                totalSeluruhDuit += hari.duitHarian;
            }
        }

        return totalSeluruhDuit.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
    }
}

const pekerjaA = new SiPalingGacor("Ronaldo");
pekerjaA.catatJamGacorku("09:00", "13:00");
pekerjaA.catatJamGacorku("09:00", "16:00");
pekerjaA.catatJamGacorku("22:00", "08:00");

console.log(`\nCatatan Kerja Si Paling Gacor ${pekerjaA.namaPegawai}:`, pekerjaA.daftarHariKerja);
console.log(`Total Duit Si Paling Gacor ${pekerjaA.namaPegawai}: ${pekerjaA.totalDuitKaryawan()}`);

const pekerjaB = new SiPalingSantai("Messi");
pekerjaB.catatJamGacorku("09:00", "18:00");
pekerjaB.catatJamGacorku("11:00", "16:00");
pekerjaB.catatJamGacorku("09:00", "15:00");

console.log(`\nCatatan Kerja Si Paling Santai ${pekerjaB.namaPegawai}:`, pekerjaB.daftarHariKerja);
console.log(`Total Duit Si Paling Santai ${pekerjaB.namaPegawai}: ${pekerjaB.totalDuitKaryawan()}`);