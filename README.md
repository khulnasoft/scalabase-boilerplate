# plugin-boilerplate
Build docker image with ScalaBase and custom plugin

## Development

```bash
git clone git@github.com:khulnasoft/khulnasoft.git my-khulnasoft-app
git clone git@github.com:khulnasoft/plugin-boilerplate.git my-khulnasoft-app/packages/plugins/@khulnasoft/plugin-boilerplate
cd my-khulnasoft-app
yarn install
```

Modify `.env`

```bash
APPEND_PRESET_LOCAL_PLUGINS=boilerplate
```

Install and start

```bash
yarn khulnasoft install
yarn dev
```
