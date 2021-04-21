import { makeStyles } from "@material-ui/core/styles";

const useStylesNotification = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default useStylesNotification;
