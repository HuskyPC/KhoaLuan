import { memo, useContext } from "react";
import { Button, CircularProgress } from "@mui/material/";
import styles from "./styles.module.css";
function LoadingData({ ...props }) {
  const { loading } = useContext(global.config.context);
  if (loading.state.length > 0) {
    return (
      // <Button variant="outlined" className={styles.button}>
      //   <CircularProgress className={styles.svg}/>
      // </Button>
      <div className="flex justify-center items-center absolute top-0 left-0 right-0 z-[999] bg-black-rgba h-screen">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-500"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
export default memo(LoadingData);
