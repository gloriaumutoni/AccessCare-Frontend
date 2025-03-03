interface Props {
  label1: string
  label2: string
}

function RadioButtons({ label1, label2 }: Props) {
  return (
    <div className="space-x-4">
      <label>
        <input type="radio" value="option1" name="options" />
        {label1}
      </label>
      <label>
        <input type="radio" value="option2" name="options" />
        {label2}
      </label>
    </div>
  )
}

export default RadioButtons
