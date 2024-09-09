import Category from "./Category";

interface SidebarProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleChange }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-black text-lg font-semibold mb-2 ">Filters</h3>
      <Category handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
