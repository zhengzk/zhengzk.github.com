---
layout: post
title:  "jekyll for windows 环境搭建!"
date:   2014-09-31 23:41:06
categories: blog
---

在windows下搭建jekyll环境的方法

本文参照:[http://jekyll-windows.juthilo.com/](http://jekyll-windows.juthilo.com/)

1. ruby部分

   * 安装ruby

     ruby官方下载地址：[http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/) 
    
     根据系统不同选择相应版本ruby下载并进行安装
    
     安装时记得勾选 "Add Ruby executables to your PATH" 选项将ruby加入path
   
   * 安装Ruby DevKit
   
     根据刚才下载的ruby版本选择下载 Ruby DevKit并安装，下载地址同ruby 
   
     安装方法：将Ruby DevKit解压,用命令行进入解压后的目录,执行以下命令：
   
         ruby dk.rb init
         ruby dk.rb install

2. 安装 jekyll
    
    在命令行输入以下内容：
    
       gem install jekyll

    在国内需要切换RubyGems镜像为: [http://ruby.taobao.org/](http://ruby.taobao.org/)  (淘宝镜像)

    切换方法在命令行依次输入： 
    
        $ gem sources --remove https://rubygems.org/ 
      
        $ gem sources -a https://ruby.taobao.org/
      
        $ gem sources -l
         
         *** CURRENT SOURCES ***
         
         https://ruby.taobao.org
         
    输入第3条命令后请确保只有 https://ruby.taobao.org

3. Syntax相关

   * rouge
      
     - 安装rouge，在命令行输入：
    
           gem install rouge
    
     - 在 _config.yml 中配置
           
           highlighter: rouge
    
    
   * Pygments
      
     - 安装python
        
       使用Pygments需要先安装Python环境(注意仅支持python2.x版本)
       
       python官网下载地址:[https://www.python.org/downloads/](https://www.python.org/downloads/)
         
       根据系统不同选择相应版本python下载并进行安装
             
       安装时记得将选项 Add python.exe to Path and select" 选为installed 使python加入path
         
     - 安装pip   
         
       pip是Python包管理工具 下载地址：[https://pip.pypa.io/en/latest/installing.html](https://pip.pypa.io/en/latest/installing.html)
         
       下载完成后命令行进入get-pip.py所在目录依次执行如下命令：
    
             python get-pip.py
             python -m pip install Pygments
                
     - 在 _config.yml 中配置
             
             highlighter: pygments          



4. Watch相关
   
   配置watch使其支持自动转换
   
   安装wdm，在命令行输入：
        
          gem install wdm
   
   如使用Gemfile，记得在文件中加入以下配置:
          
          gem 'wdm', '~> 0.1.0' if Gem.win_platform?

5. Run it

   在_config.yml中配置

       encoding: utf-8
       
   可以在命令行中使用如如下命令使其支持UTF—8编码
       
       chcp 65001

   最后可以使用如下的jekyll命令：
   
        jekyll serve
        jekyll build
        jekyll build --watch
        jekyll serve
        jekyll serve --watch
        
   > end   