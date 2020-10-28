import React from "react";
import Head from "next/head";
import Header from "../../../components/Layout/Header";
import GroupItem from "../../../components/Group/GroupItem";

export default function Profile() {
  return (
    <div>
      <Header />
      <Head>
        <title> User Profile | CampusClubs </title>
      </Head>
      <div class="container">
        <div class="columns">
          <div class="column">
            <section class="hero is-info welcome is-small">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">Hello, Bjoern.</h1>
                  <h2 class="subtitle">I hope you are having a great day!</h2>
                </div>
              </div>
            </section>
            <section class="info-tiles">
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">439th</p>
                    <p class="subtitle">User</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">5</p>
                    <p class="subtitle">Groups</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">2</p>
                    <p class="subtitle">Pending Requests</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">19</p>
                    <p class="subtitle">Clubmates</p>
                  </article>
                </div>
              </div>
            </section>
            <div class="columns">
              <div class="column is-6">
                <div class="card events-card">
                  <header class="card-header">
                    <p class="card-header-title">Groups</p>
                    <a
                      href="#"
                      class="card-header-icon"
                      aria-label="more options"
                    >
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-table">
                    <div class="content">
                      <table class="table is-fullwidth is-striped">
                        <tbody>
                          <GroupItem name="Hack4Impact" />
                          <GroupItem name="Robotics" />
                          <GroupItem name="Clubs4Us" />
                          <GroupItem name="Chonk" />
                          <GroupItem name="Stinky" />
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      View All
                    </a>
                  </footer>
                </div>
              </div>
              <div class="column is-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">Member Search</p>
                    <a
                      href="#"
                      class="card-header-icon"
                      aria-label="more options"
                    >
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="control has-icons-left has-icons-right">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">User Search</p>
                    <a
                      href="#"
                      class="card-header-icon"
                      aria-label="more options"
                    >
                      <span class="icon">
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </a>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="control has-icons-left has-icons-right">
                        <input
                          class="input is-large"
                          type="text"
                          placeholder=""
                        />
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script async type="text/javascript" src="../js/bulma.js"></script>
    </div>
  );
}
