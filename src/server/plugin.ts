import { InstallOptions, Plugin } from '@scalabase/server';

export class PluginBoilerplate extends Plugin {
  afterAdd() {}

  async beforeLoad() {}

  async load() {}

  async install(options?: InstallOptions) {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}
}

export default PluginBoilerplate;
