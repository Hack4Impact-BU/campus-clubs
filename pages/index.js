import React from "react";
import Header from '../components/Layout/Header';
import styles from "./index.module.scss";

export default function index(){
  return (
      <>
      <Header/>
      <main className="container main-container">
          <div className={styles.container}>
              <h1> All-in-One Community Engagement Platform</h1>
              <p> CampusClubs gives you what CampusGroups never could </p>
          </div>
      </main>
      </>
  )
}