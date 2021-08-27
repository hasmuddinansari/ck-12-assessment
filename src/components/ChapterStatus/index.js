import { CHAPTER_STATUS } from "./constants";
import { Circle, ProgressCircle, CompleteCircle } from "./styled";

const { COMPLETE, IN_PROGRESS } = CHAPTER_STATUS;

export const ChapterStatus = ({ status }) => {
  switch (status) {
    case COMPLETE:
      return <CompleteCircle />;
    case IN_PROGRESS:
      return <ProgressCircle />;
    default:
      return <Circle />;
  }
};
