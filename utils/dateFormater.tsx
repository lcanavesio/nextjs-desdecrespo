export const dateTimeFormatterComplete = (date: Date) => {
  if (!date) {
    return "";
  }
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const fecha = new Date(date);
  const dia = fecha.getDate();
  const mesIndex = fecha.getMonth();
  const anio = fecha.getFullYear();
  // const minutes = fecha.getMinutes();
  // const hora = fecha.getHours();
  return `${dia} ${meses[mesIndex]} ${anio} `;
};

export default function DateComponent(dateString) {
  return <time dateTime={dateString}>{dateTimeFormatterComplete(dateString)}</time>;
}
