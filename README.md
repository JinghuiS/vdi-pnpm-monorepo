# pnpm-monorepr vue 项目模板

必须使用 pnpm 作为包管理

## 命令

根安装命令 `-w` 安装到项目根目录

```bash
pnpm i  vue -w
```

子包安装命令 `-r --filter 子包名称`安装到子项目中

```bash
pnpm i dayjs -r --filter screen
```

相互依赖安装命令 `-r --filter 子包名称` 安装到子项目中

```bash
pnpm i @pm/global -r --filter @pm/screen
```
