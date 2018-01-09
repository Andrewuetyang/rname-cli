# Rname-CLI
一个命令行工具，用来重命名文件.

## Installation
```$ npm install rname-cli -g```

## Usage
```rname <oldpath-reg-string> <replace-string> <is-recursion>```

* oldpath-reg-string {string} 需要被更改的部分的正则匹配的表达式 不必写出正则的slash
* replace-string {string} 替换为
* is-recursion {boolean} 是否递归查询更改整个目录下的文件即包括子目录下的文件

## License
> The MIT License (MIT)