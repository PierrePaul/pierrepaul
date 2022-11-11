---
title: Deploying to your dokku server using a GitHub action
date: 2022-03-24
category: devops
tags: sysadmin, github, ci
slug: pushing-dokku-from-github
summary: Automatic deploy when pushing to your Github repos are always nice. Let's make it work with Dokku and Github Actions.
cover: /images/2022/push_by_maciejkuciara_d49pssl.jpg
pictureCopyrightsText: Push by maciejkuciara
pictureCopyrights: https://www.deviantart.com/maciejkuciara/art/Push-258184965
status: draft
language: en
---

To be honest, I don't use GitHub very often. This project website is pretty much my only active project on Github at the moment.
I like the product, I like the interface, but I just love Gitlab more. It's always important to keep looking at what others are doing though,
so that's why this blog is hosted on GitHub, so I am forced to go back to it from time to time.

With that said, I needed to be able to deploy this blog automagically and the GitHub Actions are the answer to that.

# How it works

GitHub Actions needs to be stored in the `.github/workflows` directory, at the root of your project.
Copy-paste my blog actions for your project: [https://github.com/PierrePaul/pierrepaul/blob/main/.github/workflows/deploy.yaml](https://github.com/PierrePaul/pierrepaul/blob/main/.github/workflows/deploy.yaml).

The only job I have set in my action is the deploy job. Everything related to downloading npm packages, generating the static site,
will be done inside the Dockerfile. That Dockerfile will be run by dokku on push, so the only thing I really need GitHub to do, is push to Dokku.

For this article I will focus on the push aspect, feel free to adapt to your project.

# The SSH key

To be able to push your project into your dokku server, you will need a SSH key set and authorized.

A few important security tips to keep in mind:
- Do not reuse an existing SSH key. It takes less than a minute to generate a new one and add it dokku.
- Do not store the private ssh key in your repo.

```
- uses: webfactory/ssh-agent@v0.5.4
  with:
    ssh-private-key: ${{ secrets.PRIVATEKEY }}
```
This [specific GitHub Action](https://github.com/marketplace/actions/webfactory-ssh-agent) will start a ssh-agent and set the private ssh key for the connection.

## Generating the SSH key

I am using webfactory-ssh-agent action and it expects you to generate a ssh key in a PEM format:

```
ssh-keygen -t rsa -m PEM
```

If you don't, you will get an error that looks like this:
```
Error loading key "(stdin)": invalid format
```

Put it somewhere on your local machine for now. It's **not** going to be pushed on GitHub.

## Authorize the SSH key

Login to your dokku server, transfer or copy-paste the public key (the one that ends up with **.pub** extension) somewhere on your server.

Authorize the key : `dokku ssh-keys:add github /full/path/of/public/key`

## Set the SSH key in GitHub

Go to your project settings on GitHub. Let's add the private key as a secret.
Your url should be somewhat close to : `https://github.com/<your username>/<your repository>/settings/secrets/actions`
Under `Secrets -> Actions`, you should have a `New repository secret` button on the top right.

![GitHub secrets interface](/images/2022/github-actions.png)


# Push it

 
