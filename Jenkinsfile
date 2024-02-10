pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
    stage('Test') {
        steps {
            bat 'npm test'
        }
    }
    }
    post {
        always {
            junit 'results/test-results.xml'
        }
    }
}
