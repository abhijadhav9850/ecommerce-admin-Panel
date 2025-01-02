var fs = require('fs');
var to = require('to-case')

import { replaceStringInFilesSync } from 'tiny-replace-files'

function generate_model_file() {
    try {
        let cli_string = process.argv.slice(2)[0];
        let model_name_snake = to.snake(cli_string || '')
        let file_url = `models/${cli_string}.model.ts`;
        check_if_file_exists_and_create_if_not_there(file_url);
        replace_content('Dummy', cli_string, file_url);
        replace_content('dummy_model', model_name_snake+'_model', file_url);
    } catch (error) {
        console.log(error)
    }
}

generate_model_file()


function check_if_file_exists_and_create_if_not_there(file_name: string) {
    let dummy_file_url = `models/Dummy.model.ts`
    if (fs.existsSync(file_name)) {
        console.log(fs.existsSync(file_name));
    }
    else {
        fs.cpSync(dummy_file_url, file_name, { recursive: true });
    }
}

function replace_content(from: string, to: string, file_name: string) {
    const options = {
        files: file_name,
        from: from,
        to: to,
    }
    replaceStringInFilesSync(options)
}
