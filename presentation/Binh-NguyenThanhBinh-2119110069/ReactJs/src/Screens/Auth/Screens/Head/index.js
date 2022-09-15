import { memo, useContext } from "react";
import { Tooltip, IconButton, Typography, Stack } from "@mui/material/";
import { HighlightOff } from "@mui/icons-material/";
import styles from "./styles.module.css";
function Head({ ...props }) {
  const { auth } = useContext(global.config.AppContext);
  function handleClose() {
    auth.handle.close();
  }
  return (
    <Stack direction="row" alignItems="center">
      <Typography flex="1" variant="h4" sx={{ py: 0, px: 1 }}>
        {auth.state.action === 1 && "Đăng nhập"}
        {auth.state.action === 2 && "Đăng ký"}
        {auth.state.action === 3 && "Quên mật khẩu"}
      </Typography>
      <Tooltip title="Đóng" placement="top" arrow>
        <IconButton onClick={handleClose} color="error">
          <HighlightOff className={styles.close} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}
export default memo(Head);
