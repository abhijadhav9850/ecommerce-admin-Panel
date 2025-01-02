var fs = require('fs');
var to = require('to-case')
import { replaceStringInFilesSync } from 'tiny-replace-files'

function generate_new_api(){
    try {
        let cli_string = process.argv[2]
        let application = cli_string?.split('/')[0]
        let api_name =cli_string?.split('/')[1]
        let api_name_snake = to.snake(api_name || '')
        if(!cli_string || !application || !api_name){
            throw 'Please enter a proper api path in format of application/api-name'
        }
        check_if_folder_exists_and_create_if_not_there(application)
        check_if_api_already_exists(application,api_name)
        copy_dummy_folder_inside_application_folder(application,api_name)
        rename_file_name(application,api_name,'swagger')
        rename_file_name(application,api_name,'api')
        rename_file_name(application,api_name,'permission')
        rename_file_name(application,api_name,'validation')
        replace_content(application,api_name,'permission','dummy_api',api_name_snake)
        replace_content(application,api_name,'validation','dummy_api',api_name_snake)
        replace_content(application,api_name,'swagger','dummy_api',api_name_snake)
        replace_content(application,api_name,'swagger','dummy_api',api_name_snake)
        replace_content(application,api_name,'api','dummy_api',api_name_snake)
        replace_content(application,api_name,'api','dummy-api',api_name)
        replace_content(application,api_name,'api','application',application)
        import_api(application,api_name,api_name_snake)
        console.log('Api Generated Successfully', `Visit http://localhost:3000/${application}/${api_name} to check it out`)
    } catch (error) {
        console.log(error)
    }
}

generate_new_api()

function check_if_folder_exists_and_create_if_not_there(application: string) {
    let folder_url = `src/${application}`
    if(fs.existsSync(folder_url)){}
    else{
        fs.mkdirSync(folder_url);
    }
}
function copy_dummy_folder_inside_application_folder(application: string,api_name:string) {
    
    let dummy_folder_url = 'src/config/dummy-api'
    let destination_url = `src/${application}/${api_name}`
    fs.cpSync(dummy_folder_url, destination_url, {recursive: true});
}
function rename_file_name(application: string, api_name: string,type:string) {
    let rename_from = `src/${application}/${api_name}/dummy-api.${type}.ts`
    let rename_to = `src/${application}/${api_name}/${api_name}.${type}.ts`
    fs.renameSync(rename_from, rename_to);
}
function replace_content(application: string, api_name: string, type: string, from: string, to: string) {
    const options = {
        files: `src/${application}/${api_name}/${api_name}.${type}.ts`,
        from: from,
        to: to,
      }
    const result = replaceStringInFilesSync(options)
}
function import_api(application:string,api_name:string,api_name_snake:string){
    let options = {
        files: `src/config/api.list.ts`,
        from: '// Import Statement here',
        to: `import { ${api_name_snake} } from "../${application}/${api_name}/${api_name}.api";\n// Import Statement here`,
      }
    let result = replaceStringInFilesSync(options)
    options = {
        files: `src/config/api.list.ts`,
        from: '// Import Api here',
        to: `${api_name_snake},\n\t// Import Api here`,
      }
    result = replaceStringInFilesSync(options)
}

function check_if_api_already_exists(application: string, api_name: string) {
    let folder_url = `src/${application}/${api_name}`
    if(fs.existsSync(folder_url)){
        throw "Couldn't generate api. Api Already Exists"
    }
}

