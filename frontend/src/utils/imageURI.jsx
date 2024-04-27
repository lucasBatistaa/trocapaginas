import * as ImagePicker from 'expo-image-picker';

export async function ImageURI() {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
       
    if (permissionResult.granted === false) {
        alert('Permissão para acessar a galeria de imagens é necessária!');
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();


    if (!pickerResult.cancelled) {
        return pickerResult.assets[0].uri 
    }  

    return ''
}