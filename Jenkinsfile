pipeline {
    agent {
        label 'main'
    }

    stages {
        stage('Cloning Ansible Playbook') {
            steps {
                sh '''
                    rm ~/tmp/ -rf && \\
                    mkdir ~/tmp/ && \\
                    cd ~/tmp/ && \\
                    sudo git clone https://github.com/freddyt18/devops-assignment.git && \\
                    cd devops-assignment&& \\
                    sudo git pull origin master
                '''
            }
        }

        stage('Alerting Telegram') {
            steps {
                sh """
                    cd ~/personal/devops-assignment/Ansible && \\
                    ansible-playbook playbooks/portfolio/00_alert.yml -e "telegram_token=${telegram_token}" -vvv
                """
            }
        }

        stage('Building Docker Image and Pushing to Docker Hub') {
            steps {
                sh '''
                    cd ~/personal/devops-assignment/Ansible && \\
                    ansible-playbook playbooks/portfolio/01_docker_hub.yml -vvv
                '''
            }
        }

        stage('Applying k8s manifest') {
            steps {
                sh '''
                    cd ~/personal/devops-assignment/Ansible && \\
                    ansible-playbook playbooks/portfolio/02_k8s.yml -vvv
                '''
            }
        }
    }

    // Send post build notification
    post {
        success {
            sh """
                sudo curl -X POST "https://api.telegram.org/bot${telegram_token}/sendMessage" -d "chat_id=642027926&text=Application%20has%20been%20deployed%20successfully."
            """
        }
        failure {
            sh """
                sudo curl -X POST "https://api.telegram.org/bot${telegram_token}/sendMessage" -d "chat_id=642027926&text=Application%20has%20failed%20to%20deploy."
            """
        }
        
    }
}