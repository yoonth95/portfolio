import { useReducer, useEffect } from "react";
import { useSlideIndexStore } from "@/stores";
import { stackInfoList } from "@/data/stackInfoList";
import { StackList } from "@/types/StackInfoType";

interface ProfileState {
  hoveredItem: string;
  filterItem: StackList;
}

type ProfileAction =
  | { type: "SET_HOVERED_ITEM"; payload: { hoveredItem: string; slideIndex: number } }
  | { type: "SET_FILTER_ITEM"; payload: StackList };

const initialState: ProfileState = {
  hoveredItem: "JavaScript",
  filterItem: stackInfoList[0].stackList[0],
};

const profileReducer = (state: ProfileState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case "SET_HOVERED_ITEM": {
      const newHoveredItem = action.payload.hoveredItem;
      const newFilterItem = stackInfoList[action.payload.slideIndex].stackList.find((item) => item.stack === newHoveredItem) || state.filterItem;
      return {
        ...state,
        hoveredItem: newHoveredItem,
        filterItem: newFilterItem,
      };
    }
    case "SET_FILTER_ITEM":
      return {
        ...state,
        filterItem: action.payload,
      };
    default:
      return state;
  }
};

export const useProfileInfo = () => {
  const { slideIndex, setSlideIndex } = useSlideIndexStore();
  const [state, dispatch] = useReducer(profileReducer, {
    ...initialState,
    filterItem: stackInfoList[slideIndex].stackList[0], // 초기 상태에서 slideIndex를 반영
  });

  useEffect(() => {
    const initialHoveredItem = stackInfoList[slideIndex].stackList[0].stack;
    if (state.hoveredItem !== initialHoveredItem) {
      dispatch({ type: "SET_HOVERED_ITEM", payload: { hoveredItem: initialHoveredItem, slideIndex } });
    }
  }, [slideIndex]);

  return { state, dispatch, slideIndex, setSlideIndex };
};
