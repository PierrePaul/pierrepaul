<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <h1 id="top">{{ $t("index.title") }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <h2 id="expertise">Expertise</h2>
      </v-col>
      <v-col cols="4" align="center">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Python</v-list-item-title>
              <v-list-item-subtitle>Django</v-list-item-subtitle>
              <v-list-item-subtitle>Wagtail</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="4" align="center">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>PHP</v-list-item-title>
              <v-list-item-subtitle>Drupal 6/7/8</v-list-item-subtitle>
              <v-list-item-subtitle>Symphony</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="4" align="center">
        <v-card>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Devops</v-list-item-title>
              <v-list-item-subtitle>Docker+docker-compose</v-list-item-subtitle>
              <v-list-item-subtitle>Vagrant</v-list-item-subtitle>
              <v-list-item-subtitle>Ansible</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <h2 id="projects">Projects</h2>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>BonjourQuebec</v-card-title>
          <v-card-text>
            <v-row>
              bla bla
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Secondo</v-card-title>
          <v-card-text>
            <v-row>
              bla bla
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>Kickoff Legends</v-card-title>
          <v-card-text>
            <v-row>
              bla bla
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title>TradeSpecifix</v-card-title>
          <v-card-text>
            <v-row>
              bla bla
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-if="$i18n.locale === 'en'">
        <h2 id="me">Me</h2>
        <p>As said earlier, I started off as a web developer, following CEGEP, where I studied "informatique de gestion" and then one year at the ETS. After my two first years as a professional web developer, I started getting really interested in system administration. This attraction helped me get a better understanding of the low level packages that would be used later on to deliver faster, more responsive web applications.</p>
        <p>From June 2013 to November 2016, I've been the main Sysadmin at Pheromone, managing a not so small cluster of servers. Some being VMWare, others being OpenVZ contexts while others were Amazon EC2.</p>
        <p>From November 2016 to May 2018, I was promoted CTO to a new Pheromone subentity named StudioQi, focused on creating games.</p>
        <p>From August 2018 up to 2020, I have been working with Francois Viens on multiple (and very cool contracts), like Dis-Moi or TradeSpecifix.</p>
        <p>In 2020, with Edouard and Francois, we decided to create a new company, called FIXRS, where developers no longer need to choose between family and work.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
}
</script>
