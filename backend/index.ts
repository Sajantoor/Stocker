import express from 'express';

const main = async () => {
    // create express server
    const app = express();

    app.listen(4000, () => {
        console.log('Listening on port 4000');
    });
};

main();