const express= require('express');
const fs= require('fs');

const app= express();

const PORT= process.env.PORT ?? 4000;

app.use(express.urlencoded({extended: true}));

app.post('/messages', (req, res) => {
    const { name, surname, email, message }= req.body;

    const exist= name && surname && email && message;
    if (!exist) {
        res.status(400).json({err: "Missing or empty properties"});
        return;
    }
    const validTypes= areStrings(name, surname, email, message);
    if (!validTypes) {
        res.status(400).json({err: "Invalid type"});
        return;
    }
    const form= {name, surname, email, message};
    // const succeeded= saveForm(form); 
    /*succeeded*/0 ? res.send() : res.status(500).json({err: "The message was received but was not saved."});
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


// Function declarations
function areStrings(name, surname, email, message) {
    const isString= (str) => {
        return typeof str === 'string' || str instanceof String;
    }
    return isString(name) && isString(surname) && isString(email) && isString(message);
};

function saveForm(form) {
    try {
        let forms;
        try {
            forms= JSON.parse(fs.readFileSync('./files/forms.json', {encoding: 'utf8'}));
        } catch (error) {
            //Handle ENOENT: no such file or directory.
            if (error.code !== 'ENOENT') throw error; //If not ENOENT, rethrow.
            forms= [];
        }
        forms.push(form);
        fs.writeFileSync('./files/forms.json', JSON.stringify(forms));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}