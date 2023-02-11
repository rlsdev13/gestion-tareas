import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import * as Path from 'path';

const config : Options = {
    entities : [ 'dist/**/*.entity.js' ],
    entitiesTs : [ 'src/**/*.entity.ts' ],
    metadataProvider : TsMorphMetadataProvider,
    migrations : {
        path : Path.join( __dirname, './_database/migrations' ),
        glob : '!(*.d).{js,ts}'
    },
    seeder : {
        path : 'src/_database/seeders',
        defaultSeeder : 'DatabaseSeeder'
    }
}

export default config;