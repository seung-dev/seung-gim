# Maintenance

### Git

branch

```cmd
git branch
```

```cmd
git branch new-branch
```

status

```cmd
git status
```

add

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks add .
```

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks add -f -- file0.ext fil1.ext
```

reset

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks reset .
```

commit

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks commit -m "Messages..."
```

pull

```cmd
git checkout dev
```

```cmd
git pull origin dev
```

merge

```cmd
git checkout loc/v0.0.0
```

```cmd
git merge dev
```

push

```cmd
git -c diff.mnemonicprefix=false -c core.quotepath=false --no-optional-locks push -v --set-upstream origin loc/v0.0.0:loc/v0.0.0
```

checkout

```cmd
git checkout loc/v0.0.0
```

```cmd
git checkout dev
```
