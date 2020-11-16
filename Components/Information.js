import React from 'react';
import Jumlah from '../Image/Jumlah.png';
import Orang from '../Image/Orang.jpg';

class Information extends React.Component {
    render() {
        return(
            <div className="top-wrapper" class="alert alert-info" role="alert">
                <div className="containe">
                    <div className="top-txt">
                            <center>
                            <img src={Jumlah} alt="Jumlah"></img>
                            </center>
                            <br></br><br></br>
                            <span class="badge badge-primary"><h5>Virus Corona</h5></span>
                            <p>Coronavirus atau virus corona merupakan keluarga besar virus yang menyebabkan infeksi saluran pernapasan atas ringan hingga sedang, seperti penyakit flu. Banyak orang terinfeksi virus ini, setidaknya satu kali dalam hidupnya.Namun, beberapa jenis virus corona juga bisa menimbulkan penyakit yang lebih serius, seperti:</p>
                            <p>-Middle East Respiratory Syndrome (MERS-CoV).</p>
                            <p>-Severe Acute Respiratory Syndrome (SARS-CoV).</p>
                            <p>-Pneumonia.</p>
                            <br></br>
                            <span class="badge badge-primary"><h5>Gejala Virus Corona</h5></span>
                            <p>Secara umum, ada 3 gejala umum yang bisa menandakan seseorang terinfeksi virus Corona, yaitu:</p>
                            <p>-Demam (suhu tubuh di atas 38 derajat Celsius)</p>
                            <p>-Batuk kering</p>
                            <p>-Sesak napas</p>
                            <br></br>
                            <p>Dan ada beberapa gejala lain yang juga bisa muncul pada infeksi virus Corona meskipun lebih jarang, yaitu:</p>
                            <p>-Diare</p><p>-Sakit kepala</p><p>-Konjungtivitis</p>
                            <p>-Hilangnya kemampuan mengecap rasa atau mencium bau</p><p>-Ruam di Kulit</p>
                            <br></br>
                            <span class="badge badge-primary"><h5>Penyebab Virus Corona</h5></span>
                            <p>Infeksi virus Corona atau COVID-19 disebabkan oleh coronavirus, yaitu kelompok virus yang menginfeksi sistem pernapasan. Pada sebagian besar kasus, coronavirus hanya menyebabkan infeksi pernapasan ringan sampai sedang, seperti flu. Akan tetapi, virus ini juga bisa menyebabkan infeksi pernapasan berat, seperti pneumonia, Middle-East Respiratory Syndrome (MERS) dan Severe Acute Respiratory Syndrome (SARS).</p>
                            <p>Ada dugaan bahwa virus Corona awalnya ditularkan dari hewan ke manusia. Namun, kemudian diketahui bahwa virus Corona juga menular dari manusia ke manusia.Seseorang dapat tertular COVID-19 melalui berbagai cara, yaitu:</p>
                            <p>-Tidak sengaja menghirup percikan ludah (droplet) yang keluar saat penderita COVID-19 batuk atau bersin</p>
                            <p>-Memegang mulut atau hidung tanpa mencuci tangan terlebih dulu setelah menyentuh benda yang terkena cipratan ludah penderita COVID-19</p>
                            <p>-Kontak jarak dekat dengan penderita COVID-19</p>
                            <br></br>
                            <span class="badge badge-primary"><h5>Tingkat Kematian Akibat Virus Corona</h5></span>
                            <p>Virus Corona yang menyebabkan COVID-19 bisa menyerang siapa saja. Menurut data yang dirilis Gugus Tugas Percepatan Penanganan COVID-19 Republik Indonesia, jumlah kasus terkonfirmasi positif hingga 15 September 2020 adalah 225.030 orang dengan jumlah kematian 8.965 orang. Tingkat kematian (case fatality rate) akibat COVID-19 adalah sekitar 4%.</p>
                            <p>Jika dilihat dari persentase angka kematian yang di bagi menurut golongan usia, maka kelompok usia di atas 60 tahun memiliki persentase angka kematian yang lebih tinggi dibandingkan golongan usia lainnya.Sedangkan berdasarkan jenis kelamin, 58,5% penderita yang meninggal akibat COVID-19 adalah laki-laki dan 41,5% sisanya adalah perempuan.</p>
                            <center>
                            <img src={Orang} alt="Orang"></img>
                            </center>
                            <center>
                            <h6>Kompas.com, halodoc.com, alodokter.com, Zona Banten-Pikiran Rakyat</h6>
                            </center>
                        </div>
                    </div>
                 </div>
            )
        }
    }

export default Information;