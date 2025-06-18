import styles from "./page.module.css";
import { GoogleLoginButton } from "./components/GoogleLoginButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Please use the button to login.
        <GoogleLoginButton />
      </main>
    </div>
  );
}
