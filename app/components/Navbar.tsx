import MenuItem from "./menu/elements/MenuItem";

export default function Navbar() {
    return (
        <div className="flex justify-evenly items-center bg-black h-14 text-white">
            <MenuItem title="About" />
            <MenuItem title="Projects" />
            <MenuItem title="Hero" />
            <MenuItem title="Services" />
        </div>
    )
}