def projectName = 'co-ambulance_dashboard'
def workSpaceDirectory = "/home/jenkins/workspace/${projectName}"

pipeline {
    agent none
    options {
        skipDefaultCheckout true
    }
    stages {
        stage('Check Pipeline Exection And Create Main Directory') {
            agent {
                node {
                    label 'Loops-Prod-V2'
                // customWorkspace "/home/jenkins/workspace/loops-event-v2_${env.BRANCH_NAME}"
                }
            }
            steps {
                echo "Git Branch: ${env.BRANCH_NAME}"
                echo "Workspace: ${workSpaceDirectory}"
                script {
                    try {
                        sh "mkdir ${workSpaceDirectory}"
                        sh "cd ${workSpaceDirectory}"
                    } catch (Exception e) {
                        echo "${e}"
                    }
                }
            }
        }
        stage('Create Directory for Environment') {
            agent {
                node {
                    label 'Loops-Prod-V2'
                // customWorkspace "/home/jenkins/workspace/loops-event-v2_${env.BRANCH_NAME}"
                }
            }
            when {
                expression {
                    return BRANCH_NAME == 'prod' ||
                        BRANCH_NAME == 'uat' ||
                        BRANCH_NAME == 'sit'
                }
            }
            steps {
                dir("${workSpaceDirectory}") {
                    sh 'pwd'
                    script {
                        try {
                            sh "mkdir ${env.BRANCH_NAME}"
                        } catch (Exception e) {
                            echo "${e}"
                        }
                    }
                }
            }
        }
        stage('Git Check Out') {
            when {
                expression {
                    return BRANCH_NAME == 'prod' ||
                        BRANCH_NAME == 'uat' ||
                        BRANCH_NAME == 'sit'
                }
            }
            agent {
                node {
                    label 'Loops-Prod-V2'
                // customWorkspace "/home/jenkins/workspace/loops-event-v2_${env.BRANCH_NAME}"
                }
            }
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${env.BRANCH_NAME}"]],
                    doGenerateSubmoduleConfigurations: false,
                    userRemoteConfigs: [[
                        credentialsId: 'livedev-token',
                        url: "https://github.com/liveedevteam/${projectName}"]]
                    ])
            }
        }
        stage('Build Artifect') {
            when {
                expression {
                    return BRANCH_NAME == 'prod' ||
                        BRANCH_NAME == 'uat' ||
                        BRANCH_NAME == 'sit'
                }
            }
            agent {
                node {
                    label 'Loops-Prod-V2'
                // customWorkspace "/home/jenkins/workspace/loops-event-v2_${env.BRANCH_NAME}"
                }
            }
            steps {
                sh "yarn install && yarn build:${env.BRANCH_NAME}"
                dir("${workSpaceDirectory}/${env.BRANCH_NAME}") {
                    script {
                        try {
                            sh "sudo mkdir ${env.BRANCH_NAME}"
                        } catch (e) {
                            sh "sudo rm -rf ${env.BRANCH_NAME}"
                            sh "sudo mkdir ${env.BRANCH_NAME}"
                            sh "cd ${env.BRANCH_NAME}"
                        }
                    }
                }
                sh "sudo cp -a ${env.BRANCH_NAME}/. ${workSpaceDirectory}/${env.BRANCH_NAME}/"
            }
        }
        stage('NGINX Restart') {
            when {
                expression {
                    return BRANCH_NAME == 'prod' ||
                        BRANCH_NAME == 'staging' ||
                        BRANCH_NAME == 'dev'
                }
            }
            agent {
                node {
                    label 'Loops-Prod-V2'
                // customWorkspace "/home/jenkins/workspace/loops-event-v2_${env.BRANCH_NAME}"
                }
            }
            steps {
                sh 'sudo service nginx restart'
            }
        }
    }
    post {
        always {
            node('Loops-Prod-V2') {
                deleteDir()
            }
            echo 'One way or another, I have finished'
        }
        success {
            slackSend(channel: '#jenkinsnotification',
                color: 'good',
                message: "The pipeline ${currentBuild.fullDisplayName} completed successfully."
            )
        }
        unstable {
            slackSend(channel: '#jenkinsnotification',
                color: 'RED',
                message: "The pipeline ${currentBuild.fullDisplayName} Unstable."
            )
            echo 'I am unstable :/'
        }
        failure {
            slackSend(channel: '#jenkinsnotification',
                color: 'RED',
                message: "The pipeline ${currentBuild.fullDisplayName} Failure."
            )
            echo 'I failed :('
        }
        changed {
            slackSend(channel: '#jenkinsnotification',
                color: 'RED',
                message: "The pipeline ${currentBuild.fullDisplayName} Chane."
            )
            echo 'Things were different before...'
        }
    }
}
