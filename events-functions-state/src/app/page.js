'use client'
import { useState } from 'react'
import styles from './globals.css'

export default function Home() {
  const [name, setName] = useState("Raj")
  const apple= ()=>{
    setName("Seema")
  }

  const Innercomp = ()=>{
    return "Inner component"
  }
  return (
    <main className={styles.main}>
      <h1>Events, function and state {name}</h1>
      <button onClick={()=> apple("")}>click me</button>
      <Innercomp />
    </main>
  );
}
