import { useContext } from 'react';
import { challengeContext } from '../context/ChallengeContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const contextData = useContext(challengeContext);
    console.log(contextData)
    const hasActivedChallenge = true;

    return(
        <div className={styles.challengeBoxContainer}>
            { hasActivedChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>
                    <footer>

                        <button
                        type="button"
                        className={styles.challengeFailedButton}
                        onClick={null}
                        >
                            Falhei
                        </button>

                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        onClick={null}
                        >
                            Completei
                        </button>

                    </footer>
                </div>
            ) : (
                <div className={styles.chanllengeNotActive}>
                    <strong>Finalize um ciclo para receber desafios</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level"/>
                            Avance de level completando desafios.
                        </p>
                </div>
            ) }
        </div>
    );
}