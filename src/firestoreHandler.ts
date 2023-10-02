// const handleImageUpload = async (imageData) => {
//     const base64ImageString = imageData;

//     const folderName = "vehicles";
//     const fileName = `${
//       vehicleData.registrationNumber
//     }-${user?.uid}-${Math.floor(Math.random() * 100000000)}.png`;

//     const storage = getStorage();
//     const storageRef = ref(storage);
//     const imageRef: StorageReference = ref(
//       storageRef,
//       `${folderName}/${fileName}`
//     );

//     try {
//       console.log("check");
//       await uploadString(imageRef, base64ImageString, "data_url");
//       console.log("Uploaded the image successfully!");

//       const downloadURL = await getDownloadURL(imageRef);

//       console.log("Download URL:", downloadURL);

//       return downloadURL;
//     } catch (error) {
//       console.error("Error uploading the image:", error);
//     }
//   };