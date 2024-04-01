export default function IsFormEmpty(value) {
    console.log('verificando', value)
    if (value.trim() === '') {
        return true 
    } else {
        return false
    }
}