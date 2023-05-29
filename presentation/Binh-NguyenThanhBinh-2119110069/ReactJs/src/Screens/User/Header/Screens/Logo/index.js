import { memo } from "react";
import { Grid, useMediaQuery } from "@mui/material/";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { OptionButton } from "../../Components/";
import { Frame, Image } from "../../../../../Components/";
import Typography from "@mui/material/Typography";
function HeaderLogo({ fixed, ...props }) {
  const isMd = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  return (
    <Grid item {...props}>
      {(isMd && (
        <NavLink to="/">
          <Frame className={styles.button}>
            <Image contain className={styles.logo} src="/images/logo.png" />
            <Typography variant="h3" gutterBottom component="div">
              Husky LT
            </Typography>
          </Frame>
        </NavLink>
      )) || (
        <OptionButton
          to="/"
          title={"Trang chủ"}
          icon={<span className={"fas fa-home"} />}
          {...props}
        />
      )}
    </Grid>
  );
}
export default memo(HeaderLogo);
