pipeline {
  agent any
  stages {
    stage('Erase root dir') {
      steps {
        sh 'rm -rf /var/jenkins_home/links_to_sites/maitsetuur.ee/*'
      }
    }

    stage('Build project') {
      agent {
        docker {
          image 'node:18.16.0-slim'
        }

      }
      steps {
        sh 'npm i'
        sh 'npm run build'
      }
    }

    stage('Copy builded project to rooot dir') {
      steps {
        sh 'cp -R build/. /var/jenkins_home/links_to_sites/maitsetuur.ee/'
      }
    }

    stage('Success') {
      steps {
        cleanWs(cleanWhenSuccess: true)
      }
    }

  }
}
