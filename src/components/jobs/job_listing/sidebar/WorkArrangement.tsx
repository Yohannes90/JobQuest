import InputField from "./InputField";

interface workArrangementProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const workArrangement:React.FC<workArrangementProps> = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-black text-base font-medium mb-2'>Type of employement</h4>
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <label className="sidebar-label-container">
            <input type="radio" name="test" value="" defaultChecked onChange={handleChange}/>
          <span className="mt-0.5 checkmark"></span><span className="text-black">Any</span>
          </label>
          <InputField handleChange={handleChange} value="In_person" title="In-person" name="test" />
          <InputField handleChange={handleChange} value="Hybrid" title="Hybrid" name="test" />
          <InputField handleChange={handleChange} value="Remote" title="Remote" name="test" />
        </div>
    </div>
  )
}

export default workArrangement
