import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { NavbarComponent } from "../Navbar/NavbarComponent";

export const SidebarComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex pl-[2%]">
      <>
        <div className="flex self-start sm:hidden ">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          className={isDrawerOpen ? "" : "drawer-hidden"} // Apply the CSS class conditionally
        >
          <NavbarComponent display="True" />
        </Drawer>
        <NavbarComponent display="False" />
      </>
    </div>
  );
};
