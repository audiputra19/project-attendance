import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            title: "English",
            welcome: "Welcome Back",
            attendance: "Attendance",
            yourSalary: "Your Salary",
            mySalary: "My Salary",
            myReport: "My Report",
            myLeave: "My Leave",
            services: "Services",
            salary: "Salary",
            leave: "Leave",
            about: "About",
            logout: "Logout",
            homePage: 'Home Page',
            home: "Home",
            report: "Report",
            profile: "Profile",
            menu: "Menu",
            todayAttendance: "Today Attendance",
            hours: 'Hours',
            minutes: 'Minutes',
            seconds: 'Seconds',
            checkIn: 'Check In',
            break: 'Break',
            breakIn: 'Break In',
            checkOut: 'Check Out',
            late: 'Late',
            onTime: 'On Time',
            halfHours: 'Half Hours',
            goHome: 'Go Home',
            language: 'Language',
            darkMode: 'Dark Mode',
            selectLanguage: 'Select Language',
            selectYearMonth: 'Select Year and Month',
            selectDate: 'Select Date',
            notFound: 'Data Not Found',
            present: 'Present',
            permit: 'Permit',
            employee: 'Employee',
            division: 'Division',
            joinDate: 'Join Date',
            headerAbout: 'Dataku for Web',
            version: 'Version',
            bodyAbout: 'Dataku for web is build using React. Designed for the web to provide convenience for users. So users can access anywhere and on any platform.',
            from: 'From',
        }
    },
    id: {
        translation: {
            title: "Indonesia",
            welcome: "Selamat Datang",
            attendance: "Absensi",
            yourSalary: "Gaji Anda",
            mySalary: "Gaji Saya",
            myReport: "Laporan Saya",
            myLeave: "Cuti Saya",
            services: "Layanan",
            salary: "Gaji",
            leave: "Cuti",
            about: "Tentang",
            logout: "Keluar",
            homePage: 'Halaman Utama',
            home: "Beranda",
            report: "laporan",
            profile: "Profil",
            menu: "Menu",
            todayAttendance: "Today Attendance",
            hours: 'Jam',
            minutes: 'Menit',
            seconds: 'Detik',
            checkIn: 'Masuk',
            break: 'Istirahat',
            breakIn: 'Ist. Masuk',
            checkOut: 'Keluar',
            late: 'Telat',
            onTime: 'Tepat',
            halfHours: 'Set. Jam',
            goHome: 'Pulang',
            language: 'Bahasa',
            darkMode: 'Mode Gelap',
            selectLanguage: 'Pilih Bahasa',
            selectYearMonth: 'Pilih Tahun dan Bulan',
            selectDate: 'Pilih Tanggal',
            notFound: 'Data Tidak Ditemukan',
            present: 'Hadir',
            permit: 'Izin',
            employee: 'Karyawan',
            division: 'Divisi',
            joinDate: 'Tgl. Gabung',
            headerAbout: 'Dataku untuk Web',
            version: 'Version',
            bodyAbout: 'Dataku untuk dibangun menggunakan React. Dirancang untuk web agar memberikan kenyamanan bagi pengguna. Jadi pengguna dapat mengakses dimana saja dan di platform mana saja.',
            from: 'Dari',
        }
    }
}

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;    