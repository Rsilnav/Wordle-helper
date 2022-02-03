import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cell from './components/cell';
import WordList from './components/wordlist';
import { useState } from 'react';

export default function Home() {

  const [green, setGreen] = useState(['', '', '', '', '']);
  const [yellow, setYellow] = useState(['', '', '', '', '']);
  const [grey, setGrey] = useState(['']);

  function reset() {
    setGreen(['', '', '', '', '']);
    setYellow(['', '', '', '', '']);
    setGrey(['']);
  }

  return (
      <div className={ styles.container }>
        <Head>
          <title>Wordle Helper</title>
        </Head>

        <main className={ styles.main }>
          <h1 className={ styles.title }>
            Wordle Helper
          </h1>

          <button onClick={ () => reset() }>Limpiar</button>

          <div className={ styles.grid }>
            <Cell color="green" id={ 0 } state={ green } setState={ setGreen }/>
            <Cell color="green" id={ 1 } state={ green } setState={ setGreen }/>
            <Cell color="green" id={ 2 } state={ green } setState={ setGreen }/>
            <Cell color="green" id={ 3 } state={ green } setState={ setGreen }/>
            <Cell color="green" id={ 4 } state={ green } setState={ setGreen }/>
          </div>

          <div className={ styles.grid }>
            <Cell color="yellow" id={ 0 } state={ yellow } setState={ setYellow }/>
            <Cell color="yellow" id={ 1 } state={ yellow } setState={ setYellow }/>
            <Cell color="yellow" id={ 2 } state={ yellow } setState={ setYellow }/>
            <Cell color="yellow" id={ 3 } state={ yellow } setState={ setYellow }/>
            <Cell color="yellow" id={ 4 } state={ yellow } setState={ setYellow }/>
          </div>

          <div className={ styles.grid }>
            <Cell color="grey" size="big" id={ 0 } state={ grey } setState={ setGrey }/>
          </div>

          <WordList grey={ grey } green={ green } yellow={ yellow }/>
        </main>
    </div>
  )
}
