import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00a18b',
  },

  containerButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
  },

  containerInput: {
    borderColor: 'black',
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
  },

  input: {
    width: 250,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appButton: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
// Start add news

buttonPickImage : {
  borderRadius : 5,
  width : 150
},

imageAddProfile : {
  width:250,
  height:250
},

buttonAddProfile : {
  width:150,
  margin:10
},

inputAddProfile : {
  width:250
},
//end

});