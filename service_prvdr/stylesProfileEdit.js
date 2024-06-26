import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loading: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    height: 1000,
  },
   header: {
    // backgroundColor: '#FFD700',
    flexDirection: 'row',
    height: 58,
    color: 'black',
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:10,
  },
  avatar: {
    borderRadius: 80,
    marginTop: 50,
    backgroundColor: 'white',
    height: 160,
    width: 160,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 5,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  camIconDiv: {
    position: 'absolute',
    right: 142,
    zIndex: 1,
    bottom: 5,
    height: 36,
    width: 36,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  cameraIcon: {
    color: 'black',
  },
  backIcon: {
    marginLeft: 20,
    color: 'black',
  },
  nameText: {
    color: 'black',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputField: {
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
  },
  
  buttonDiv: {
    alignItems: 'left',
    marginTop: 5,
  },
  saveButton: {
    width: '30%',
    margin:5,
    backgroundColor: '#FFD700',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  savedMessage: {
    color: 'green',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});
