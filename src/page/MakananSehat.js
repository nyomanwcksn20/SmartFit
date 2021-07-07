import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import food1 from '../asset/food1.jpg';

export class MakananSehat extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#242320' }}>
        <View style={styles.container}>
          <Image source={food1} style={styles.img} />

          <View>
            <Text style={styles.tittle}>Makanan Sehat </Text>
          </View>

          <View>
            <ScrollView>
              <View style={styles.container}>
                <View style={styles.Pgf}>
                  <View>
                    <Text style={styles.Judul}>Makanan sehat</Text>
                  </View>
                  <Text style={styles.txt}>
                    Makanan sehat adalah makanan yang seharusnya mengandung
                    beragam nutrisi yang dibutuhkan oleh tubuh. Tubuh memerlukan
                    berbagai macam nutrisi agar dapat tetap sehat dan
                    pertumbuhan dapat berjalan dengan optimal. Syarat makanan
                    yang sehat (4 sehat 5 sempurna), yaitu bersih, memiliki gizi
                    yang baik dan seimbang. Keseimbangan makanan sehat adalah
                    makanan yang memiliki kandungan karbohidrat, protein, lemak,
                    dan vitamin. Kita bisa mengonsumsi beragam jenis makanan
                    sehat, tanpa terbatas pada satu jenis saja. Mengonsumsi
                    berbagai jenis makanan bisa memberikan nutrisi yang berbeda,
                    sehingga gizi yang diperlukan oleh tubuh bisa terpenuhi.
                    <View></View>
                  </Text>
                </View>

                <View style={styles.Pgf}>
                  <View>
                    <Text style={styles.Judul}>
                      Jenis Pilihan Makanan Sehat
                    </Text>
                  </View>
                  <Text style={styles.txt}>
                    Makanan sehat seharusnya dapat memberikan beragam kandungan
                    nutrisi dalam jumlah yang memadai, termasuk mineral dan
                    vitamin.
                    <View></View>
                  </Text>
                </View>

                <View style={styles.Pgf}>
                  <View>
                    <Text style={styles.Judul}>Sayur-sayuran</Text>
                  </View>
                  <Text style={styles.txt}>
                    Di antara jenis makanan, sayuran hijau adalah makanan sehat
                    peringkat pertama karena memiliki kandungan nutrisi yang
                    lengkap. Sayuran hijau yang baik dikonsumsi untuk kesehatan
                    tubuh, antara lain :<View></View>
                  </Text>

                  <View>
                    <Text style={styles.Judul}>Brokoli</Text>
                  </View>
                  <Text style={styles.txt}>
                    Sayuran yang satu ini kaya akan serat, kalsium, kalium,
                    folat dan fitonutrien. Zat ini adalah senyawa yang dapat
                    mengurangi risiko penyakit jantung, diabetes, dan beberapa
                    jenis kanker. Brokoli juga mengandung vitamin C,
                    antioksidan, serta beta-karoten. Satu porsi brokoli, yaitu
                    sebanyak 100 gram dapat memberi kamu lebih dari 150 persen
                    asupan vitamin C harian yang disarankan.
                    <View></View>
                  </Text>

                  <View>
                    <Text style={styles.Judul}>Kale</Text>
                  </View>
                  <Text style={styles.txt}>
                    Ada berbagai macam nutrisi yang terkandung di dalam
                    daun-daun Kale. Vitamin C adalah salah satu nutrisi yang
                    dimiliki Kale, dan menurut Departemen Kedokteran Amerika
                    Serikat (USDA), kale juga mengandung sejumlah besar vitamin
                    K, yaitu sebanyak 817 mikrogram atau 778 persen dari asupan
                    harian yang direkomendasikan.
                    <View></View>
                  </Text>

                  <View>
                    <Text style={styles.Judul}>Sayuran Berdaun Hijau</Text>
                  </View>
                  <Text style={styles.txt}>
                    Penelitian telah menunjukkan bahwa banyak mengonsumsi
                    sayuran berdaun hijau gelap, seperti bayam atau kubis, dapat
                    secara signifikan menurunkan risiko seseorang terkena
                    diabetes tipe 2. Bayam misalnya, sangat kaya akan
                    antioksidan, terutama ketika direbus sebentar. Bayam juga
                    merupakan sumber vitamin A, B6, C, E, dan K yang baik.
                    <View></View>
                  </Text>
                </View>

                <View style={styles.Pgf}>
                  <View>
                    <Text style={styles.Judul}>Buah-buahan</Text>
                  </View>
                  <Text style={styles.txt}>
                    Buah-buahan juga sangat penting dikonsumsi karena memiliki
                    kandungan vitamin yang tinggi. Berikut ini buah yang
                    memiliki kandungan nutrisi yang tinggi :
                  </Text>
                  <Text style={styles.txt}>
                    - Apel, karena memiliki kandungan serat, vitamin C, dan
                    antioksidan lain.
                  </Text>
                  <Text style={styles.txt}>
                    - Jeruk, yang tinggi kandungan vitamin C.
                  </Text>
                  <Text style={styles.txt}>
                    - Alpukat, yang memiliki kandungan tinggi lemak sehat,
                    kalium, dan vitamin C.
                  </Text>
                  <Text style={styles.txt}>
                    - Pisang, sebagai salah satu sumber kalium.
                  </Text>
                  <Text style={styles.txt}>
                    - Buah-buahan berry, seperti blueberry dan strawberry.
                    Memiliki kandungan antioksidan dan serat yang tinggi serta
                    rendah kalori.
                  </Text>
                </View>

                <View style={styles.Pgf}>
                  <Text style={styles.txt}>
                    Makanan sehat seharusnya dikonsumsi dengan seimbang dan juga
                    beragam. Berikut ini beberapa kelompok makanan sehat selain
                    sayuran yang harus kita konsumsi :
                  </Text>
                  <Text style={styles.txt}>
                    - Daging dan Telur. Selain mengandung banyak nutrisi, daging
                    sapi tanpa lemak adalah sumber protein dan zat besi yang
                    tinggi bila dibanding daging lainnya. Untuk telur, tergolong
                    sebagai salah satu bahan makanan yang paling bergizi. Ini
                    karena telur memiliki kandungan nutrisi yang lengkap, yaitu
                    protein dengan kandungan asam amino essensial dan non
                    essensial lengkap, vitamin, mineral, dan lemak tak jenuh.
                  </Text>
                  <Text style={styles.txt}>
                    - Kacang-Kacangan dan Biji-Bijian. Kelompok makanan ini
                    merupakan jenis makanan sehat yang renyah dan sarat akan
                    nutrisi dan berbagai mineral penting untuk tubuh, termasuk
                    magnesium dan vitamin E. Kacang-kacangan merupakan sumber
                    protein nabati yang baik, terutama bagi mereka yang
                    vegetarian.
                  </Text>
                  <Text style={styles.txt}>
                    - Ikan dan Makanan Laut Lainnya. Makanan laut seperti ikan,
                    adalah sumber asam lemak omega-3 dan yodium. Berdasarkan
                    penelitian, orang yang sering makan ikan laut memiliki
                    risiko lebih rendah terhadap beragam penyakit, seperti
                    penyakit jantung dan cenderung berumur panjang.
                  </Text>
                  <Text style={styles.txt}>
                    - Susu. Susu memiliki kandungan tinggi mineral, protein
                    hewani, lemak sehat, dan juga vitamin. Selain itu, kandungan
                    kalsium pada susu juga memiliki kadar yag tinggi. Susu juga
                    diolah menjadi keju, difermentasi menjadi yoghurt yang baik
                    untuk pencernaan karena mengandung banyak bakteri baik
                  </Text>
                  
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default MakananSehat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242320',
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
    color: 'white',
  },

  tittle: {
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  Judul: {
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'white',
  },
  Pgf: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
    padding: 5,
    color: 'white',
    borderColor: 'white',
  },
});
