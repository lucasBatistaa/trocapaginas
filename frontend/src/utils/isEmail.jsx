export default function isEmail (email) {
    const emailRegex = /\S+@\S+\.\S+/

    return emailRegex.test(email)
}