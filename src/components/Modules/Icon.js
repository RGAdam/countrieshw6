import { Ico } from "./Ico.styled";

const Icon = ({ source, theme }) => {
  return (
    <Ico src={require(`../../assets/${source}.svg`)} alt="" theme={theme} />
  );
};

export default Icon;
