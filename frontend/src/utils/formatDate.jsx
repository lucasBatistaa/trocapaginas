export function FormatDate() {
    const dateNow = new Date();

    const day = dateNow.getDate();
    const mounth = dateNow.getMonth() + 1; // Os meses começam do zero, então é necessário adicionar 1
    const year = dateNow.getFullYear();

    // Formatação para dois dígitos, adicionando um zero à esquerda, se necessário
    const dayFormat = day < 10 ? '0' + day : day;
    const mounthFormat = mounth < 10 ? '0' + mounth : mounth;

    const currentDate = `${dayFormat}/${mounthFormat}/${year}`;

    return currentDate
}