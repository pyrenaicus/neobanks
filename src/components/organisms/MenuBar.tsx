import IconBarchart from "../atoms/IconBarchart";
import IconCompass from "../atoms/IconCompass";
import IconUser from "../atoms/IconUser";

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-item-active">
        <IconBarchart />
      </div>
      <IconCompass />
      <IconUser />
    </div>
  );
};

export default MenuBar;
