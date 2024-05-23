//import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
export async function ImageURI() {
    try {

        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permissão para acessar a galeria de imagens é necessária!');
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspects: [4, 3],
            quality: 1, 
            base64: true
        });


        if (!pickerResult.canceled) {
            const data = 'data:image/jpeg;base64,' + pickerResult.assets[0].base64

            return data;

        }else {
            return '';
        }

    } catch (error) {
        console.error('Erro ao selecionar a imagem:', error);
        return '';
    }
}