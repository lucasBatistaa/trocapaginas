export default function IsFormEmpty(value) {
    if (value.trim() === '') {
        return true 
    } else {
        return false
    }
}