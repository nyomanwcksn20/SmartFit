import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import health from '../asset/health.jpg';

export class HidupSehat extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text style={styles.tittle}>Pola Hidup Sehat</Text>
          </View>

          <Image source={health} style={styles.img} />

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Pola makan sehat</Text>
            </View>
            <Text style={styles.txt}>
              Pola makan sehat dinilai berdasarkan pemenuhan konsumsi seseorang
              akan sayur, buah, kacang-kacangan, biji-bijian utuh, lemak sehat,
              dan asam lemak omega-3. Asupan makanan sehat akan dibandingkan
              dengan banyaknya makanan tak sehat yang Anda konsumsi, seperti
              daging olahan, makanan atau minuman manis, lemak jenuh, dan garam
              (sodium). Contoh pola makan sehat didefinisikan sebagai kebiasaan
              makan makanan bergizi dan konsumsi lebih sedikit karbohidrat,
              sodium, maupun lemak jenuh, serta menghindari makanan yang tidak
              bergizi seperti junk food. Penting juga untuk memperhatikan
              frekuensi makan Anda. Terlalu banyak makan atau dengan porsi yang
              tidak wajar akan meningkatkan risiko kegemukan maupun obesitas.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Menjaga kebersihan</Text>
            </View>
            <Text style={styles.txt}>
              Menjaga kebersihan diri, seperti cuci tangan dengan sabun dan air
              mengalir, menggosok gigi, dan menjaga kebersihan organ intim,
              adalah salah satu prinsip dari pola hidup sehat yang sering
              dipandang sebelah mata. Namun, hal ini jangan sampai terlupa.
              Selain itu, pastikan selalu mengolah makanan dengan cara yang
              tepat. Cuci bahan makanan sebelum dimasak.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Beraktivitas fisik</Text>
            </View>
            <Text style={styles.txt}>
              Orang yang menjalani pola hidup sehat adalah mereka yang
              berolahraga dalam intensitas sedang atau sampai berat minimal 30
              menit untuk 3-5 kali dalam seminggu. Durasi waktu olahraga bisa
              lebih lama bila Anda melakukan aktivitas berintensitas ringan.
              Akan tetapi, ingkatan intensitas olahraga tentunya harus
              disesuaikan dengan kondisi fisik dan kemampuan tubuh, untuk
              kemudian bisa ditingkatkan lagi seiring waktu. Jangan bayangkan
              olahraga hanya bisa dilakukan di pusat kebugaran dan memerlukan
              alat olahraga yang rumit. Berjalan kaki atau melakukan pekerjaan
              rumah, seperti menyapu, mengepel, atau berkebun, juga bisa
              dikategorikan sebagai olahraga selama kegiatan itu membuat badan
              aktif bergerak.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Meraih berat badan ideal</Text>
            </View>
            <Text style={styles.txt}>
              Memiliki berat badan ideal bukan berarti Anda harus kurus.
              Sebaliknya, Anda harus memiliki indeks massa tubuh (IMT) yang
              ideal, yakni berkisar antara 18,5 hingga 24,9.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Tidak minum alkohol dan merokok</Text>
            </View>
            <Text style={styles.txt}>
              Konsumsi minuman alkohol harus sangat dibatasi atau dihindari sama
              sekali jika Anda ingin menjalani pola hidup sehat. Batasan
              konsumsi alkohol untuk orang yang menjalani pola hidup sehat
              adalah 5-15 gram per hari (untuk wanita) dan 5-30 gram per hari
              untuk pria. Meski demikian, akan lebih baik lagi jika Anda tidak
              mengonsumsi alkohol sama sekali. Sementara itu, rokok harus sama
              sekali dijauhi. Tidak ada tawar menawar. Segera cari cara untuk
              berhenti merokok agar Anda bisa memulai gaya hidup sehat. Sebab
              sekalipun Anda rutin berolahraga, menjaga pola makan, berat badan
              ideal, dan tidak minum alkohol, semua hal itu tidak berarti bila
              Anda merokok. Para peneliti sepakat bahwa rokok tidak memiliki
              secuilpun manfaat, malah sebaliknya. Rokok memiliki segudang
              bahaya untuk kesehatan.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Istirahat Yang Cukup</Text>
            </View>
            <Text style={styles.txt}>
              Istirahat yang cukup adalah bagian yang penting dalam menjalani
              pola hidup sehat. Kebutuhan istirahat dan tidur setiap individu
              berbeda-beda sesuai tahap perkembangan aktivitas yang dijalani.
              National Sleep Foundation merekomendasikan bahwa usia dewasa muda
              (18-25 tahun) membutuhkan waktu tidur 7-9 jam per malam. Orang
              yang tidak memiliki waktu tidur cukup berpotensi terkena penyakit
              mematikan, seperti kanker dan jantung. Memiliki waktu tidur yang
              kurang juga setara dengan mengonsumsi racun atau menjalani pola
              makan yang buruk. Oleh karena itu, sesibuk apapun kamu, usahakan
              untuk selalu beristirahat dan tidur dengan cukup. Namun jangan
              salah, tidur berlebihan juga tidak baik dan tentunya merugikan.
              Menurut studi, tertidur lebih dari delapan jam secara konsisten
              dapat menurunkan tingkat konsentrasi seseorang. Selain menjaga
              tubuh agar tetap bugar, tidur dapat membantu kamu untuk membentuk
              tubuh yang proporsional. Tidur dalam posisi yang baik juga dapat
              merangsang kreativitas dan meningkatkan ingatan. Maka aturlah jam
              tidur kamu agar bisa mendapatkan tidur yang efektif dan hidup
              sehat.
              <View></View>
            </Text>
          </View>

          <View style={styles.Pgf}>
            <View>
              <Text style={styles.Judul}>Berpikir Positif</Text>
            </View>
            <Text style={styles.txt}>
              Secara psikologi berpikir positif adalah aktivitas berpikir yang
              dilakukan dengan tujuan untuk membangkitkan aspek positif pada
              diri, baik itu yang berupa potensi, semangat, tekad, maupun
              keyakinan diri sehingga memunculkan perasaan, perilaku, dan hal
              baik yang menjadi sistem berpikir. Para peneliti telah menemukan
              manfaat dari berpikir positif untuk kesehatan. Salah satu manfaat
              berpikir positif adalah membantu membangun sistem kekebalan tubuh.
              Berpikir positif tidak hanya dapat menjaga kondisi tubuh agar
              tetap sehat, tetapi juga dapat menunjukkan pengaruh kondisi
              seseorang secara keseluruhan sehingga mampu memperpanjang usia.
              Seseorang dengan pemikiran yang positif akan lebih merasa bahagia
              dan hal ini dapat memicu kamu untuk menjadi orang yang lebih
              produktif.
              <View></View>
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default HidupSehat;

const styles = StyleSheet.create({
 container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#242320"
  },

  img: {
    borderRadius: 10,
    marginTop: 10,
    height: 150,
    width: '95%',
  },

  txt: {
    marginTop: 15,
    padding: 5,
    fontSize: 18,
    color: 'white'
  },

  tittle: {
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  Judul: {
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'white'
  },
  Pgf: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    padding: 5,
    color: 'white',
    borderColor:'white',
  },
});
