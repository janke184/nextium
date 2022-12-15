import * as icons from "@mui/icons-material";


export default function GenericIcon(props) {

  let iconName = props.iconName;

  // exists props.iconName in icons?
  if (!icons[iconName]) {
    iconName = "MiscellaneousServices";
  }

  const Icon = icons[iconName];

  return (
    <Icon/>
  );
};
