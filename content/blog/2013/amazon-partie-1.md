Title: Amazon Partie 1
Date: 2013-11-19
Category: DevOps
Tags: Amazon
Slug: amazon-partie-1
Summary: Introduction à Amazon. Nous allons voir la base, les différents systèmes, les limites et tous les petits trucs à penser sur leurs systèmes.
cover: images/2013/amazon.png
Status: draft

Cette série de trois articles vont survoler chacun des aspects les plus importants d'Amazon, vous permettant de lancer un nouveau projet sur leurs systèmes. Amazon un bon nombre de produits très pointus essayant de combler le mieux possible un problème technologique très précis. Les interfaces Web sont toujours en développement, retravaillant sans cesse l'expérience utilisateur (UX). Certains détestent, beaucoup n'aiment pas le changement, surtout lorsqu'ils sont aussi fréquents.

## Table des matières

### Partie 1
  - Intro
  - L'interface
  - Survol des prix
  - IAM
    - Générer une clef SSH

### Partie 2
  - EC2 (Elastic Compute Cloud)
  - AMI (Amazon Machine Image)
  - EBS (Elastic Block Storage)

### Partie 3
  - S3 (Simple Storage Service)
  - Route 53
  - Load balancers

## Intro

Amazon est à mon avis une série de systèmes merveilleux. Ils ont pris l'idée des VPS (virtual private server) et ont mis une série d'API, permettant aux développeurs/sysadmins/devops d'automatiser la création de nouvelles machines. Pouvoir créer des machines à la volée, de manière automatique, est une fonctionnalité extrêmement utile. C'est maintenant possible, via les services d'Amazon ou encore via des scripts automatisés, de créer des machines lorsque celles qui sont déjà en place sont surchargées par le traffic. C'est aussi maintenant possible de copier facilement un serveur de production et pouvoir faire des tests sur une copie, le tout en quelques minutes. 

Amazon vient malheureusement avec une série de problèmes. Très peu de gens semblent formés pour travailler avec la plateforme, qui s'apprend facilement, mais qui demande quand même un minimum de temps. Il y a aussi beaucoup de points à considérer qui ne sont malheureusement pas assez mis de l'avant par Amazon. Cette série d'articles va essayer de combler une partie de ses problèmes.

