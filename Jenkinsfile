pipeline {
    agent { label 'Slavik' }
    stages {
        stage('Stop docker frontent') {
            steps {
                script {
                    try {
                        sh 'docker stop frontend'
                    } catch (Exception e) {
                        echo "Error: Failed to stop the stack, but continuing the pipeline."
                        echo "Error message: ${e.getMessage()}"
                    }
                }
            }
        }
        stage('Erase docker image') {
            steps {
                script {
                    try {
                        sh 'docker rm frontend'
                        sh 'docker rmi frontend'
                    } catch (Exception e) {
                        echo "Error: Failed to stop the stack, but continuing the pipeline."
                        echo "Error message: ${e.getMessage()}"
                    }
                }
            }
        }
        stage('Delete dockerfile') {
            steps {
                sh 'rm Dockerfile'
            }
        }
        stage('Copy new dockerfile') {
            steps {
                sh 'cp /var/jenkins/infra/Dockerfile_frontend Dockerfile'
            }
        }
        stage('Build docker image') {
            steps {
                sh 'docker build . -t frontend'
            }
        }
        stage('Start docker container') {
            steps {
                sh 'docker run --name frontend -p 80:80 -e REACT_APP_API_BASE_URL=https://testapi.maitsetuur.ee/v1 -d frontend'
                cleanWs()
            }
        }
    }
}
