import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
  },

  input: {
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    width: 350,
    height: 50,
    alignSelf: 'center',
    borderRadius: 10,
  },

  Button: {
    backgroundColor: 'gray',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 10,
  },

  IconButton: {
    marginTop: 10,
    width: 30,
    height: 30,
  },

  SearchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ListItem: {
    margin: 2,
    backgroundColor: '#D3D3D3',
    flexDirection: 'row',
  },
});

export default styles;
