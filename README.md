# scalabase-boilerplate
Build docker image with ScalaBase and custom plugin

## Development

```bash
git clone git@github.com:khulnasoft/scalabase.git my-khulnasoft-app
git clone git@github.com:khulnasoft/scalabase-boilerplate.git my-khulnasoft-app/packages/plugins/@scalabase/scalabase-boilerplate
cd my-khulnasoft-app
yarn install
```

Modify `.env`

```bash
APPEND_PRESET_LOCAL_PLUGINS=boilerplate
```

Install and start

```bash
yarn scalabase install
yarn dev
```
