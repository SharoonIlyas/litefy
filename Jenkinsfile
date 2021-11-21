node{
    stage("Checkout SCM"){
           git branch: 'tests', url: 'https://github.com/SharoonIlyas/litefy.git'

    }

    stage('Install node modules'){
        sh "npm install"
    }

    stage("Build"){
        sh "npm run build:ssr"
    }
}
