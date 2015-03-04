---
layout: post
title:  "jekyll for windows 环境搭建!"
date:   2014-09-31 23:41:06
categories: blog
---

在windows下搭建jekyll环境的方法：
本文参照:http://jekyll-windows.juthilo.com/
1.ruby
下载并安装ruby
ruby官方下载地址：http://rubyinstaller.org/downloads/
根据系统不同选择相应版本ruby并安装
安装时记得勾选 "Add Ruby executables to your PATH" 选项将ruby加入path
之后下载 Ruby DevKit 并安装
安装方法： 将Ruby DevKit解压 用命令行进入解压后的目录 执行
ruby dk.rb init
ruby dk.rb install

2.jekyll 
安装 jekyll
gem install jekyll

RubyGems 镜像 - 淘宝网
http://ruby.taobao.org/

切换方法：
$ gem sources --remove https://rubygems.org/
$ gem sources -a https://ruby.taobao.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org

3.Syntax

rouge

Install a Syntax Highlighter

gem install rouge

_config.yml
highlighter: rouge


Pygments

Install Python  v2.7.8

Add python.exe to Path
python get-pip.py

python -m pip install Pygments

_config.yml
highlighter: pygments

4.Watch
Install the wdm Gem
gem install wdm
5.Run it

chcp 65001

jekyll build
jekyll build --watch
jekyll serve
jekyll serve --watch