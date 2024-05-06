import { Dropdown as BaseDropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

const MenuItem = styled(BaseMenuItem)(
  () => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    user-select: none;

    &:last-of-type {
      border-bottom: none;
    }

    &:focus {
      outline: 3px solid #99CCF3;
      background-color: #E5EAF2;
      color: #1C2025;
    }

    &.${menuItemClasses.disabled} {
      color: #B0B8C4;
    }
    `
);

const MenuButton = styled(BaseMenuButton)(
  () => `
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    background: #fff;
    border: 1px solid #DAE2ED;
    color: #1C2025;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

    &:hover {
      background: #F3F6F9;
      border-color: #C7D0DD;
    }

    &:active {
      background: #E5EAF2;
    }

    &:focus-visible {
      box-shadow: 0 0 0 4px #99CCF3;
      outline: none;
    }
    `
);

const Listbox = styled("ul")(
  () => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: #fff;
    border: #DAE2ED;
    color: #1C2025;
    box-shadow: 0px 4px 6px rgba(0,0,0, 0.05);
    z-index: 1;
    `
);

interface DropdownProps {
  items: Array<string>;
  selectedItem: string;
  onClickItem: (item: string) => void;
}

const Dropdown = (props: DropdownProps) => {
  const { items, selectedItem, onClickItem } = props;

  return (
    <BaseDropdown>
      <MenuButton>{selectedItem}</MenuButton>
      <Menu slots={{ listbox: Listbox }}>
        {items.map(item => (
          <MenuItem key={item} onClick={() => onClickItem(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </BaseDropdown>
  );
};

export default Dropdown;
