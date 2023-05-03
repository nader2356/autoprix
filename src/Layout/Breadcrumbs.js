
import { default as MuiBreadcrumbs } from "@mui/material/Breadcrumbs";
import styled from "@mui/material/styles/styled";


import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumbs({ openBreadcrumbs, setOpenBreadcrumbs,openSearchBar,setOpenSearchbar}) {
  const location = useLocation();
  console.log(location);
  const lastPath = location.pathname.split("/").pop();

  const StyledBreadcrumb = styled(MuiBreadcrumbs)({
    margin: "1rem 0",
    textTransform: "capitalize",
    width: "15rem",
    marginLeft : "5.3rem",
    marginTop:   "6rem",
    paddingTop: "0.5rem",
    paddingLeft: "1.3rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#fafafa",
  });

  if (location.pathname === "/dashboard") {
    setOpenBreadcrumbs(true);
    setOpenSearchbar(true)
    
  }
  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: "inherit",
    textDecoration: "none",
  }));

  return (
    <>
      {openBreadcrumbs && 
        <StyledBreadcrumb aria-label="breadcrumb">
          <StyledNavLink to="/dashboard">Home</StyledNavLink>
          {location.pathname.split("/").map((path, index) => {
            if (index === 0) return null;

            const to = `Accueil/${location.pathname
              .split("/")
              .slice(1, index + 1)
              .join("/")}`;

            return (
              <StyledNavLink key={index} to={to}>
                {path}
              </StyledNavLink>
            );
          })}
        </StyledBreadcrumb>
      }
    </>
  );
}
