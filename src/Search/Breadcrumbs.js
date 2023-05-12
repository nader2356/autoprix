import { default as MuiBreadcrumbs } from "@mui/material/Breadcrumbs";
import styled from "@mui/material/styles/styled";

import { NavLink, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  console.log(location);
  const lastPath = location.pathname.split("/").pop();

  const StyledBreadcrumb = styled(MuiBreadcrumbs)({
    textTransform: "capitalize",
    width: "15rem",
   
    marginTop: "7rem",
    paddingTop: "0.5rem",
    paddingLeft: "1rem",
    paddingBottom: "0.3rem",
    backgroundColor: "#fafafa",
  });
 

  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: "inherit",
    textDecoration: "none",
  }));

  return (
    <>
      
        <StyledBreadcrumb aria-label="breadcrumb">
          <StyledNavLink to="/dashboard">Accueil</StyledNavLink>
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
     
    </>
  );
}
