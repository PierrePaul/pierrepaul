<template>
  <v-container>
    <v-row>
      <v-col cols="12" align="center">
        <h1 id="top" class="text-h1">{{ $t("index.title") }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <h2 id="blog" class="text-h2">{{ $t('index.latest') }}</h2>
      </v-col>
      <v-col cols="12" md="6" lg="4" v-for="article in articles" :key="article.slug">
        <IndexBlog :article="article" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <h2 id="expertise" class="text-h2">Expertise</h2>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="text-center">
        <IndexExpertise title="Python" subtitle="Django, Wagtail, I love python">
          <img src="~/assets/django.svg" />
        </IndexExpertise>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="text-center">
        <IndexExpertise title="PHP" subtitle="Drupal 7/8/9, Symphony">
          <img src="~/assets/drupal.svg" />
        </IndexExpertise>
      </v-col>
      <v-col cols="12" md="4" sm="6" class="text-center">
        <IndexExpertise title="DevOps/CI" subtitle="Docker, docker-compose, Vagrant, Ansible, Gitlab runner/bitbucket pipelines">
          <img src="~/assets/docker.svg" />
        </IndexExpertise>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" align="center">
        <h2 id="projects" class="text-h2">{{ $t('index.projects.title') }}</h2>
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Project name="Secondo" :description="$t('index.projects.secondo')" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Project name="Kickoff Legends" :description="$t('index.projects.kol')" />
      </v-col>
      <v-col cols="12" sm="6" lg="4">
        <Project name="TradeSpecifix" :description="$t('index.projects.tradespecifix')" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 id="me" class="text-h2">{{$t('index.me')}}</h2>
      </v-col>
      <v-col cols="12" v-if="$i18n.locale === 'en'" class="text-body-1">
        <p>As said earlier, I started off as a web developer, following CEGEP, where I studied "informatique de gestion" and then one year at the ETS. After my two first years as a professional web developer, I started getting really interested in system administration. This attraction helped me get a better understanding of the low level packages that would be used later on to deliver faster, more responsive web applications.</p>
        <p>From June 2013 to November 2016, I've been the main Sysadmin at Pheromone, managing a not so small cluster of servers. Some being VMWare, others being OpenVZ contexts while others were Amazon EC2.</p>
        <p>From November 2016 to May 2018, I was promoted CTO to a new Pheromone subentity named StudioQi, focused on creating games.</p>
        <p>From August 2018 up to 2020, I have been working with Francois Viens on multiple (and very cool contracts), like Dis-Moi or TradeSpecifix.</p>
        <p>In 2020, with Edouard and Francois, we decided to create a new company, called FIXRS, where developers no longer need to choose between family and work.</p>
      </v-col>
      <v-col cols="12" v-if="$i18n.locale === 'fr'" class="text-body-1">
        <p>J'ai commencé ma carrière en tant que développeur web, suivant ma formation en informatique de gestion au collège de Maisonneuve et d'une année à l'ETS en génie informatique.</p>
        <p>Après mes deux premières années, j'ai commencé à m'intéresser sérieusement à l'administration de système.</p>
        <p>Cette attirance soudaine venait principalement du besoin de rendre mes applications PHP plus rapides et par le fait même, plus agréables.</p>
        <p>De 2014 à 2016, j'ai travaillé en tant qu'administrateur système (sysadmin) pour gérer un parc informatique assez important chez Phéromone.</p>
        <p>En 2016, lors de l'ouverture de StudioQi, une sous entité de Phéromone, j'ai été promus au poste de CTO pour gérer l'équipe d'une vinghtaine de personnes.</p>
        <p>À l'été 2018, j'ai décidé de quitté StudioQi pour me joindre à Francois Viens, pour travailler sur le mandat de Dis-Moi, qui essait de prévenir le suicide chez les jeunes de 12-18 ans.</p>
        <p>Début 2020, avec Francois et Édouard, nous avons créer une nouvelle compagnie nommée FIXRS, où les développeurs n'ont plus à choisir entre famille et boulot.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2 id="contact" class="text-h2">{{$t('index.contact')}}</h2>
      </v-col>
      <v-col cols="12" v-if="$i18n.locale === 'fr'" class="text-body-1">
        <p>Vous pouvez me contacter via info[@]pierre-paul.com ou via <a href="https://www.linkedin.com/in/pierrepaull/" target="_blank">LinkedIn</a>.</p>
        <p>Ou encore via <a rel="me" href="https://mastodon.social/@pierrepaul">Mastodon</a>.</p>
      </v-col>
      <v-col cols="12" v-if="$i18n.locale === 'en'" class="text-body-1">
        <p>You can contact me via info[@]pierre-paul.com ou via <a href="https://www.linkedin.com/in/pierrepaull/" target="_blank">LinkedIn</a>.</p>
        <p>Or on <a rel="me" href="https://mastodon.social/@pierrepaul">Mastodon</a>.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import IndexExpertise from "../components/IndexExpertise";
import Project from "../components/Project";
import IndexBlog from "../components/IndexBlog";
export default {
  async asyncData ({ $content, app }) {
    const articles = await $content('blog', {deep: true}).where({ 'status': 'published', 'language': app.i18n.locale }).sortBy('date', 'desc').limit(3).fetch()
    return {
      articles
    }
  },
  components: {IndexBlog, Project, IndexExpertise}
}
</script>
