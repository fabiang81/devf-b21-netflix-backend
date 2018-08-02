import mongoose from 'mongoose';

process.env.NODE_ENV = 'test'

const config = {
    db:{
        test:'mongodb://admin:fabian12@ds159651.mlab.com:59651/netflix-test'
    },
    connection:null
}

function connect(){
    return new Promise((resolve,reject) => {
        if(config.connection){
            return resolve()
        }
        const mongoUri = 'mongodb://admin:fabian12@ds159651.mlab.com:59651/netflix-test';

        mongoose.Promise = Promise;

        const options = {
            server: {
                auto_reconnect:true,
                reconnectTries:Number.MAX_VALUE,
                reconnectInterval:1000
            }
        };

        mongoose.connect(mongoUri,options);

        config.connection = mongoose.connection;

        config.connection
            .once('open', resolve)
            .on('error', (e) => {
                if(e.message.code === 'TIMEOUT'){
                    console.log(e);
                    mongoose.connect(mongoUri,options);
                }
                console.log(e)
                reject(e);
            });
    });
}

function clearDatabase() {
    return new Promise(resolve => {
        let count = 0;
        let max = Object.keys(mongoose.connection.collections).length;
        for(const i in mongoose.connection.collections){
            mongoose.connection.collections[i].remove(function() {
                count++;
                if(count >= max){
                    resolve();
                }
            });
        }
    });
}

export async function setupTest(){
    await connect();
    await clearDatabase();
}