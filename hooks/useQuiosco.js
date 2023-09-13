import { useContext } from "react";
import QuioscoContext, { QuiscoPrivider } from "@/context/QuioscoProvider";


const useQuiosco = () => {
    return useContext(QuioscoContext);
};

export default useQuiosco;