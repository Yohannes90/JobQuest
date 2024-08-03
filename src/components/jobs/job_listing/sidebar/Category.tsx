import InputField from "./InputField";

interface CategoryProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Category:React.FC<CategoryProps> = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-black text-base font-medium mb-2'>Type of employement</h4>
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <label className="sidebar-label-container">
            <input type="radio" name="test" value="" defaultChecked onChange={handleChange}/>
          <span className="mt-0.5 checkmark"></span><span className="text-black">Any</span>
          </label>
          <InputField handleChange={handleChange} value="IT" title="IT" name="test" />
          <InputField handleChange={handleChange} value="Human resource" title="Human resource" name="test" />
          <InputField handleChange={handleChange} value="Marketing and sales" title="Marketing and sales" name="test" />
          <InputField handleChange={handleChange} value="Project managment" title="Project managment" name="test" />
        </div>
    </div>
  )
}

export default Category