import { Ico } from "./Ico.styled";

const Icon = ({ source }) => {
  return <Ico src={require(`../../assets/${source}.svg`)} alt="" />;
};

export default Icon;
