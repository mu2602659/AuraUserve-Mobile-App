// components/EditProfileScreen.js
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,ImageBackground, TextInput, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { IMG_URL } from "../config/ip_address";
import axios from "axios";

const EditProfileScreen = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!image) {
      Alert.alert("No image selected", "Please select an image before saving.");
      return;
    }
  
    if (!name ) {
      Alert.alert("Incomplete Information", "Please enter your name before saving.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("avatar", {
        uri: image,
        type: "image/jpeg",
        name: "avatar.jpg",
      });
      formData.append("name", name);

      const response = await axios.post(`${IMG_URL}/profile-image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Handle response if needed
      console.log("Profile saved successfully:", response.data);
  
      // Optionally, navigate to another screen or perform any other action
    } catch (error) {
      console.error("Error saving profile:", error);
      // Handle error if needed
    }
  };
  
  return (
   
    <View style={styles.container}>
       <ImageBackground 
    source={require("../assets/images/background.jpg")}
      style={styles.Background}
    >
      <TouchableOpacity onPress={pickImage} style={styles.profileContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.profileImage} />
        ) : (
          <View style={styles.profilePlaceholder}>
            <Text style={styles.profilePlaceholderText}>Add</Text>
          </View>
        )}
         <TextInput
        style={styles.field}
        placeholder="Enter Your Name"
        value={name}
        onChangeText={setName}
      />
      </TouchableOpacity>
      </ImageBackground>
     
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 0,
    backgroundColor: "#fff",
  },
  profileContainer: {
    marginBottom: 100,
    marginLeft:100,
    marginTop:100,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  profilePlaceholderText: {
    fontSize: 18,
    color: "#555",
  },
  saveButton: {
    backgroundColor: "#FDDA0D",
    padding: 18,
    borderRadius: 5,
    width: 230,
    alignItems: "center",
    marginBottom:180,
    marginTop:-100,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  Background:{
    width:"100%",
    marginBottom:170,
    marginLeft:100,
    marginRight:100,
  },
  field:{
    borderColor: "gray",
    borderWidth: 5,
    marginRight:60,
    marginLeft:-50,
    marginTop:15,
  },
});

export default EditProfileScreen;
