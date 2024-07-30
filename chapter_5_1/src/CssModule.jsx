import classes from "./CssModule.module.scss"

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Css Moduleです</p>
      <button className={classes.button}>ボタン</button>
    </div>
  );
};
