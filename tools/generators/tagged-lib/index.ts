import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface Schema {
  name: string;
  type: 'util' | 'feature' | 'ui';
  directory: 'api' | 'store' | 'shared';
}

export default async function (host: Tree, schema: Schema) {
  await libraryGenerator(host, {
    name: `${schema.type}-${schema.name}`,
    directory: schema.directory,
    tags: [`type:${schema.type}`, `scope:${schema.directory}`].join(','),
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
