import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

export default function Layout({isVisible,children}) {
  return (
    <div>
      <MainNavigation isVisible={isVisible} />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
