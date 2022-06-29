import { DarkModeButt } from "./DarkModeButt.styled";
import { FlexWrapper } from "../styles/FlexWrapper.styled";

import Icon from "./Icon";

const DarkModeButton = ({ onClick, theme }) => {
  return (
    <FlexWrapper height="25px" minHeight="0">
      <DarkModeButt type="button" onClick={onClick} theme={theme}>
        <Icon source="moon" />
        Dark Mode
      </DarkModeButt>
    </FlexWrapper>
  );
};

export default DarkModeButton;
