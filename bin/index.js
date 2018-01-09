#!/usr/bin/env node

const fs = require('fs')
const program = require('commander')

program
  .version('0.0.1')
  .usage('<oldpath-reg-string> <replace-string> <is-recursion>')
  .parse(process.argv)

const args = program.args
const oldpathReg = new RegExp(args[0])
const replaceString = args[1]
const isRecursion = args[2] === 'true' || false // 是否递归更新子目录下的文件名 默认为false

rename(process.cwd())

function rename(dir) {
  fs.readdir(dir, function (err, files) {
    files.forEach(function (filename) {
      const filePath = `${dir}/${filename}`
      if (fs.lstatSync(filePath).isFile()) {
        fs.renameSync(filePath, filePath.replace(oldpathReg, replaceString))
      } else {
        isRecursion && rename(filePath)
      }
    })
  })
}