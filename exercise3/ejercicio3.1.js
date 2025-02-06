

// create your function here

const getFilePath = (input) => {
    let path = [];
    for (let i = 0; i < input.length - 1; i++ ) {
        path = [...path, input[i]];
    };
    const extension = input[input.length - 1];
    const filePath = [path.join('/'), extension];
    return filePath.join('.');
}


//yourFunction(input1); // 'Downloads/Videos/capture.mp4'

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]
    
    
//yourFunction(input2); // 'CodinGame/python.py'

const input2 = [
    'CodinGame',
    'python',
    'py',
];


    
//yourFunction(input3);
    // 'programming/languages/easy/beginner/useful/pythonstuff.py

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]

//test

console.log(getFilePath(input1));
console.log(getFilePath(input2));
console.log(getFilePath(input3));



