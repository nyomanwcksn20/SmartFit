import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
import { DataTable } from 'react-native-paper';
import suplemen from '../asset/suplemen.jpg';

export class Suplemen extends Component {
  
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={suplemen} style={styles.img} />

          <View>
            <Text style={styles.tittle}>Suplemen</Text>
          </View>

          <View>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Dessert</DataTable.Title>
                <DataTable.Title numeric>
                  Calories
                </DataTable.Title>
                <DataTable.Title numeric>Fat</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell>Frozen yogurt</DataTable.Cell>
                <DataTable.Cell numeric>159</DataTable.Cell>
                <DataTable.Cell numeric>6.0</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
                <DataTable.Cell numeric>237</DataTable.Cell>
                <DataTable.Cell numeric>8.0</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={(page) => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Suplemen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderWidth: 1,
    borderRadius: 10,
  },

  tittle: {
    marginTop: 15,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
});
