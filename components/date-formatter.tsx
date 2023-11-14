type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const date = new Date(dateString);
  return <time dateTime={dateString}>{date.toLocaleDateString('en-GB', options)}</time>
}

export default DateFormatter