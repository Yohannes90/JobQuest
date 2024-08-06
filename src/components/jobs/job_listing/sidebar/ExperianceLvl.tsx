import InputField from "./InputField";

interface ExperianceLvlProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ExperianceLvl:React.FC<ExperianceLvlProps> = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-black text-base font-medium mb-2'>Experiance level</h4>
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <label className="sidebar-label-container">
            <input type="radio" name="test" value="" defaultChecked onChange={handleChange}/>
          <span className="mt-0.5 checkmark"></span><span className="text-black">All</span>
          </label>
          <InputField handleChange={handleChange} value="Intership" title="Intership" name="test" />
          <InputField handleChange={handleChange} value="Junior" title="Junior" name="test" />
          <InputField handleChange={handleChange} value="Senior" title="Senior" name="test" />
          <InputField handleChange={handleChange} value="Expert" title="Expert" name="test" />
        </div>
    </div>
  )
}

export default ExperianceLvl
