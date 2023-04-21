pipeline {
  agent any
  stages {
    stage('Erase root dir') {
      steps {
        sh 'rm -rf /var/jenkins_home/links_to_sites/maitsetuur.ee/*'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Build project') {
      steps {
        sh 'npm build'
      }
    }

    stage('Copy builded project to rooot dir') {
      steps {
        sh 'cp -R build/. /var/jenkins_home/links_to_sites/maitsetuur.ee/'
      }
    }

    stage('') {
      steps {
        cleanWs(cleanWhenSuccess: true)
      }
    }

  }
}