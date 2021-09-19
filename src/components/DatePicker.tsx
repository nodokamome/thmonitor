import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const SimpleDatePicker = () => {
  const initialDate = new Date()
  const [startDate, setStartDate] = useState(initialDate)
  const handleChange = (date) => {
    setStartDate(date)
  }

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
    />
  )
}

export default SimpleDatePicker;
