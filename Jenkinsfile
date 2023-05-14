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
    }
    stage('Erase docker image') {
        steps {
            script {
                try {
                    sh 'docker rmi frontend'
                } catch (Exception e) {
                    echo "Error: Failed to stop the stack, but continuing the pipeline."
                    echo "Error message: ${e.getMessage()}"
                }
            }
        }
    }
    stage('Build docker image') {
        steps {
            sh 'docker build . -t frontend:latest'
        }
    }
    stage('Start docker container') {
        steps {
            sh 'docker run -p 80:80 -d frontend:latest'
            cleanWs()
        }
    }
}
