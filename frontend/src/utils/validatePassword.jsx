export default function validatePassword (password) {
    const requirements = {
        minimum: /^.{8,}$/,
        hasNumber: /(?=.*\d)/,
        hasLetterCase: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
        hasSimbol: /\W|_/
    };

    for (const label in requirements) {
        if (requirements[label].test(password)) {
            return true;
        }
    }

    return false;
};