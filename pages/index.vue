<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 id="top">I am Pierre Paul Lefebvre</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 id="expertise">Expertise</h2>
        <v-col cols="6">
          <h3>Python</h3>
          <ul>
            <li>Django</li>
            <li>Wagtail</li>
          </ul>
        </v-col>
        <v-col cols="6">
          <h3>PHP</h3>
          <ul>
            <li>Drupal 6+7+8</li>
            <li>Symphony</li>
          </ul>
        </v-col>
        <v-col cols="6">
          <h3>Devops</h3>
          <ul>
            <li>Ansible</li>
            <li>Docker+docker-compose</li>
            <li>Vagrant</li>
          </ul>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 id="projects">Projects</h2>
        <ul>
          <li>BonjourQuebec</li>
          <li>Secondo</li>
          <li>kickoff legends</li>
          <li>lvhockey</li>
          <li>tradespecifix</li>
        </ul>
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
  </div>
</template>

<script>

export default {
}
</script>
