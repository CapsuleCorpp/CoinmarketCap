import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserById, currencySelected } from "../redux/test";
interface reducerData {
  currency: string;
  entities: any[];
}
export default function Kaka() {
  const count = useSelector((state: any) => state.reducer.currency);
  const state = useSelector((state: any) => state.reducer.entities);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserById(count));
    console.log(state);
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            currencySelected({
              currency: "USD",
            })
          );
        }}
      ></button>
    </div>
  );
}
