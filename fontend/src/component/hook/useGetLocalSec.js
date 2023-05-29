import { useState } from "react";

export default function useGetLocalSec(keyValue) {
  let isUserLocal = JSON.parse(localStorage.getItem(keyValue));
  let isUserSEC = JSON.parse(sessionStorage.getItem(keyValue));

  const [UserID, setUser] = useState();
  if (UserID === undefined) {
    if (isUserLocal !== null) setUser(isUserLocal);
    else if (isUserSEC !== null) setUser(isUserSEC);
  }
  return UserID;
}
