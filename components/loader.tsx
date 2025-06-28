import { useInjection } from "inversify-react";
import { UserStore } from "../stores/UserStore";
import { useEffect } from "react";
import { observer } from "mobx-react";

const Loader = observer(({ children }: any) => {
  const userStore = useInjection(UserStore);
  useEffect(() => {
    window.addEventListener("load", (event) => {
      userStore.setLoaded(true);
    });
  }, []);
  return children;
})
export default Loader;